import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.css";

export default function RadioButton(props) {
  return (
    <div className="radio">
      <label>
        <input
          data-testid="radio-button"
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

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
