import { useTogglePresetStore } from "../../stores/togglePresetStore";
import PresetsContainer from "../PresetsContainer/PresetsContainer";
import "./ChatWindow.css";
import ChatWindowInput from "./ChatWindowInput";
import ChatWindowNav from "./ChatWindowNav";
import ChatWindowOutput from "./ChatWindowOutput";

const ChatWindow = () => {
  const { isPresetOpen } = useTogglePresetStore();
  return (
    <div className="chat-window">
      <ChatWindowNav />
      {isPresetOpen && <PresetsContainer />}
      <ChatWindowOutput />
      <ChatWindowInput />
    </div>
  );
};

export default ChatWindow;
