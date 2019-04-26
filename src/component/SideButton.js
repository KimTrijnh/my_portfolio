import React from "react";
import "./sideButton.css";

const SideButton = props => {
  return (
    <div>
      <button className="side-btn">
        <span className="sideBtn-text">{props.text}</span>
      </button>
    </div>
  );
};

export default SideButton;
