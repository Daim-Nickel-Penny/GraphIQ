import "./Button.css";

interface ButtonProps {
  text: string;
  outlined: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export default function Button({
  text,
  outlined,
  onClick,
  style,
}: ButtonProps) {
  return (
    <button
      className={`button ${outlined ? "button__outlined" : ""}`}
      type="button"
      onClick={onClick}
      style={style}
    >
      {text}
    </button>
  );
}
