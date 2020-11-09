import React from "react";
import PropTypes from "prop-types";
import "./Title.css";

export default function Title(props) {
  return <div className="title">{props.title}</div>;
}

Title.propTypes = {
  title: PropTypes.string,
};
