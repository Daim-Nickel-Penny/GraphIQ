import "./ChatWindow.css";
import ChatWindowInput from "./ChatWindowInput";
import ChatWindowNav from "./ChatWindowNav";
import ChatWindowOutput from "./ChatWindowOutput";

const ChatWindow = () => {
  return (
    <div className="chat-window">
      <ChatWindowNav />
      <ChatWindowOutput />
      <ChatWindowInput />
    </div>
  );
};

export default ChatWindow;
