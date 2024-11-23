import "./Button.css";

interface ButtonProps {
  text: string;
  outlined: boolean;
  onClick: () => void;
}

export default function Button({ text, outlined, onClick }: ButtonProps) {
  return (
    <button
      className={`button ${outlined ? "button__outlined" : ""}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
