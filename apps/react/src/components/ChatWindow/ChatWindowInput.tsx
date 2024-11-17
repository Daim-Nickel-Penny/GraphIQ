import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";
import { API_ENDPOINTS } from "../../constants/apiEndpoints";
import { IChatResponse } from "../../types/chatResponse";
import useLoadingChatStore from "../../stores/loadingChatStore";
import useChatStore from "../../stores/chatStore";

import { v4 as uuidv4 } from "uuid";

export default function ChatWindowInput() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState("");

  const setIsLoading = useLoadingChatStore((state) => state.setIsLoading);
  const addChatRequest = useChatStore((state) => state.addChatRequest);
  const addChatResponse = useChatStore((state) => state.addChatResponse);

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${
      textAreaRef.current.scrollHeight - 30
    }px`;
  };

  const handleSubmitUserPrompt = async () => {
    if (!value.trim()) return;

    setIsLoading(true);

    const newChatRequest = {
      id: uuidv4(),
      userPrompt: value.trim(),
      createdAt: Date.now(),
    };
    addChatRequest(newChatRequest);

    const body = {
      userPrompt: value.trim(),
    };

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
          if (e.key === "Enter" && !e.shiftKey) {
            handleSubmitUserPrompt();
          }
        }}
      ></textarea>
      <div className="chat-window__statusbar">
        <div className="chat-window__statusbar__icon">
          <Icon name="Menu" color="white" size="15px" />
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
