import React from "react";
import "./button.css";
const Button = ({ clName, onClick, text }) => {
  return (
    <div className={clName} onClick={onClick}>
      {text}
    </div>
  );
};
export default Button;
