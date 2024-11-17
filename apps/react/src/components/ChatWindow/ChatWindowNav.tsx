interface ChatWindowNavProps {
  greeting?: string;
}

export default function ChatWindowNav({
  greeting = "Welcome to GraphIQ",
}: ChatWindowNavProps) {
  return (
    <div className="chat-window__nav">
      <div className="chat-window__nav__greeting">{greeting}</div>
      <div className="chat-window__nav__tab">Experimental</div>
    </div>
  );
}
