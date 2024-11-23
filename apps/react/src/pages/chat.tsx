import "./styles/chat.css";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import { useEffect } from "react";

export default function Chat() {
  //disable reload or close warning

  useEffect(() => {
    window.onbeforeunload = function () {
      return "";
    };
  }, []);
  return (
    <div className="chat">
      <ChatWindow />
    </div>
  );
}
