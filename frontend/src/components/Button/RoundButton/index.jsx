import React from "react";
import "./style.css";

function RoundButton({ onClick, renderItem }) {
  return <button onClick={onClick} className="button-block">{renderItem}</button>;
}

export default RoundButton;
