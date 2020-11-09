import React from "react";
import "./RadioButton.css";

export default function RadioButton(props) {
  return (
    <div className="radio">
    <label>
      <input
        type="radio"
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.label}
    </label>
  </div>
  );
}