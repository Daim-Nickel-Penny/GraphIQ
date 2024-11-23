import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { IChatResponse } from "../../types/chatResponse";
import useLoadingChatStore from "../../stores/loadingChatStore";
import useChatStore from "../../stores/chatStore";

import { v4 as uuidv4 } from "uuid";
import { IChatRequest } from "../../types/chatRequest";

export default function ChatWindowInput() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState("");
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  const setIsLoading = useLoadingChatStore((state) => state.setIsLoading);
  const addChatRequest = useChatStore((state) => state.addChatRequest);
  const addChatResponse = useChatStore((state) => state.addChatResponse);

  const getLastChatResponse = useChatStore(
    (state) => state.getLastChatResponse
  );

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
          setBase64Image(reader.result as string);
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

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };
    try {
      const response = await fetch(
        `${API_ENDPOINTS.baseUrl}/chats/get-chat-completion`,
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
      ></textarea>
      <div className="chat-window__statusbar">
        <div className="chat-window__statusbar__icon">
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
