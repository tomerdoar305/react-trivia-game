import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export default function Button(props) {
  return (
    <button
    data-testid="button"
      className={`button button-${props.size} ${
        props.disabled ? "button-disable" : ""
      }`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
