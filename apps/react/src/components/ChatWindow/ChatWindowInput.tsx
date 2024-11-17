import { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";

export default function ChatWindowInput() {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [value, setValue] = useState("");

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = `${
      textAreaRef.current.scrollHeight - 30
    }px`;
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
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
      ></textarea>
      <div className="chat-window__statusbar">
        <div className="chat-window__statusbar__icon">
          <Icon name="Menu" color="white" size="15px" />
        </div>
        <div className="chat-window__statusbar__submit">
          Submit <Icon name="CornerDownLeft" color="white" size="12px" />
        </div>
      </div>
    </div>
  );
}
