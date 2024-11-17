interface ChatWindowNavProps {
  greeting?: any;
}

export default function ChatWindowNav({
  greeting = (
    <div>
      Welcome to <span style={{ color: "var(--active-green)" }}>GraphIQ</span>
    </div>
  ),
}: ChatWindowNavProps) {
  return (
    <div className="chat-window__nav">
      <div className="chat-window__nav__greeting">{greeting}</div>
      <div className="chat-window__nav__tab">Experimental</div>
    </div>
  );
}
