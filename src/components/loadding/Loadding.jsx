import React from "react";
import "./loadding.css";

const Loadding = ({ className, error }) => {
  return (
    <div className={className}>
      {error ? <p>{error.message}</p> : <p>Loadding...</p>}
    </div>
  );
};

export default Loadding;
