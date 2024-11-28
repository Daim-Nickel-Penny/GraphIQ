import React from "react";
import "./TextHighlight.css";

export default function TextHighlight(props: { text: React.ReactNode }) {
  return <h1 className="text-highlight">{props.text}</h1>;
}
