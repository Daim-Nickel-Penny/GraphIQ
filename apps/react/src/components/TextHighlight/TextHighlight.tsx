import "./TextHighlight.css";

export default function TextHighlight(props: { text: string }) {
  return <h1 className="text-highlight">{props.text}</h1>;
}
