import React from "react";

export default function Error({ message }) {
  return (
    <div className="error">
      <p>{message}</p>
    </div>
  );
}
