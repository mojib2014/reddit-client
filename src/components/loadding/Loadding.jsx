import React from "react";
import loaddingGif from "./loadding.gif";
import "./loadding.css";

const Loadding = ({ className, error }) => {
  return (
    <div className={className}>
      {error ? (
        <p>{error.message}</p>
      ) : (
        <img src={loaddingGif} alt="laodding icon" />
      )}
    </div>
  );
};

export default Loadding;
