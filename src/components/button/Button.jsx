import React from "react";
import "./button.css";

const Button = ({ className, ariaLabel, onClick, children }) => {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
