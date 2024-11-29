import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { IChatResponse } from "../../types/chatResponse";
import useLoadingChatStore from "../../stores/loadingChatStore";
import useChatStore from "../../stores/chatStore";

import { v4 as uuidv4 } from "uuid";
import { IChatRequest } from "../../types/chatRequest";
import { useTogglePresetStore } from "../../stores/togglePresetStore";

export default function ChatWindowInput() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState("");
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const setIsLoading = useLoadingChatStore((state) => state.setIsLoading);
  const isLoading = useLoadingChatStore((state) => state.isLoading);
  const addChatRequest = useChatStore((state) => state.addChatRequest);
  const addChatResponse = useChatStore((state) => state.addChatResponse);
  const getLast10ChatAsContext = useChatStore(
    (state) => state.getLast10ChatAsContext
  );
  const getLastChatResponse = useChatStore(
    (state) => state.getLastChatResponse
  );

  const { isPresetOpen } = useTogglePresetStore();
  const setIsPresetOpen = useTogglePresetStore((state) => state.setIsOpen);

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${
      textAreaRef.current.scrollHeight - 30
    }px`;
  };
  const handleImageDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    setDragging(false);

    const file = event.dataTransfer.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          // Check the size of the file in bytes
          const fileSize = file.size;

          if (fileSize > 3.5 * 1024 * 1024) {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");

              let { width, height } = img;
              const maxSize = 1000; // Set a reasonable dimension limit for the resized image.

              if (width > maxSize || height > maxSize) {
                if (width > height) {
                  height = (height / width) * maxSize;
                  width = maxSize;
                } else {
                  width = (width / height) * maxSize;
                  height = maxSize;
                }
              }

              canvas.width = width;
              canvas.height = height;

              ctx?.drawImage(img, 0, 0, width, height);

              // Compress the image
              let quality = 0.9; // Start with 90% quality
              let base64Image = canvas.toDataURL("image/jpeg", quality);

              while (base64Image.length > 3.5 * 1024 * 1024 && quality > 0.1) {
                quality -= 0.1; // Reduce quality by 10%
                base64Image = canvas.toDataURL("image/jpeg", quality);
              }

              setBase64Image(base64Image);
            };

            img.src = reader.result as string;
          } else {
            // If the file is less than or equal to 3.5 MB, set it directly
            setBase64Image(reader.result as string);
          }
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setBase64Image(null);
  };

  const handleSubmitUserPrompt = async () => {
    if (!value.trim()) return;

    setIsLoading(true);

    let newChatRequest: IChatRequest = {
      id: uuidv4(),
      userPrompt: value.trim(),
      createdAt: Date.now(),
    };

    if (base64Image) {
      newChatRequest = {
        ...newChatRequest,
        base64Image,
      };
    }

    addChatRequest(newChatRequest);

    let body: Partial<IChatRequest> = {
      userPrompt: value.trim(),
    };

    if (base64Image) {
      body = {
        ...body,
        base64Image,
      };
    }

    const context = getLast10ChatAsContext();

    if (context) {
      body = {
        ...body,
        context,
      };
    }

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${API_ENDPOINTS.baseUrl}/chats/get-chat`,
        options
      );

      //chats/get-chat-completion
      const data: IChatResponse = await response.json();

      const newResponse = {
        id: data.id,
        createdAt: data.createdAt,
        model: data.model,
        response: data.response,
        timeTaken: data.timeTaken,
      };

      addChatResponse(newResponse);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

    setValue("");
    setBase64Image(null);
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
    return () => {
      window.removeEventListener("resize", resizeTextArea);
    };
  }, []);
  return (
    <div className="chat-window__input">
      <div
        className={`chat-window__dropzone ${dragging ? "dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleImageDrop}
      >
        {base64Image ? (
          <div className="chat-window__image-preview">
            <img
              className="chat-window__chat-request__image"
              src={base64Image}
              alt="Uploaded"
              style={{
                opacity: isLoading ? 0.5 : 1,
                filter: isLoading ? "grayscale(1)" : "none",
                borderColor: isLoading ? "var(--very-light-grey)" : "",
              }}
            />
            <button
              className="chat-window__image-preview__remove"
              onClick={handleImageRemove}
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="chat-window__dropzone__placeholder">
            Drag and drop an image here!
          </div>
        )}
      </div>
      <textarea
        className="chat-window__textarea"
        placeholder="Ask GraphIQ anything..."
        value={value}
        ref={textAreaRef}
        onChange={(e) => {
          setValue(e.target.value);
          resizeTextArea();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            if (e.shiftKey) {
              e.preventDefault();
              const newValue = value + "\n";
              setValue(newValue);
            } else {
              e.preventDefault();
              handleSubmitUserPrompt();
            }
          }
        }}
        style={{
          color: isLoading ? "var(--very-light-grey)" : "",
          opacity: isLoading ? 0.5 : 1,
        }}
        disabled={isLoading}
      ></textarea>

      <div className="chat-window__statusbar">
        <div
          className="chat-window__statusbar__icon"
          title="Open Presets"
          onClick={() => setIsPresetOpen(!isPresetOpen)}
        >
          <Icon name="Menu" color="white" size="15px" />
        </div>
        <div className="chat-window__statusbar__stats">
          {getLastChatResponse() && (
            <div className="chat-window__statusbar__stats__response">
              <span className="stats-model">
                {getLastChatResponse()?.model}
              </span>
              took
              <span className="stats-timetaken">
                {getLastChatResponse()?.timeTaken &&
                  getLastChatResponse()?.timeTaken.toFixed(2)}
                s
              </span>
            </div>
          )}
        </div>
        <div
          className="chat-window__statusbar__submit"
          onClick={handleSubmitUserPrompt}
        >
          Submit <Icon name="CornerDownLeft" color="white" size="12px" />
        </div>
      </div>
    </div>
  );
}
