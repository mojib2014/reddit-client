import React from "react";

export default function Error({ title, error, children }) {
  return (
    <div className="error">
      <h2>Failed to load {title}.</h2>
      <p>{`Error: ${error.error}`}</p>
      <p> {`message: ${error.message}`}</p>
      <p>{`reason: ${error.reason}`}</p>
      {children}
    </div>
  );
}
