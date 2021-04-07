import React from "react";
import "./avatar.css";

const Avatar = ({ name, children }) => {
  return (
    <span className="author-details">
      {children}
      <span>{name}</span>
    </span>
  );
};

export default Avatar;
