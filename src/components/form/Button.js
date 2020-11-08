import React from "react";
import "./Button.css";

export default function Button(props) {
  console.log("Button props:", props)

  return (
    <button
      className={`button button-${props.size}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}
