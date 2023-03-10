//Portal
import React from "react";
import ReactDOM from "react-dom";

function Portal() {
  return ReactDOM.createPortal(
    <div>hello world</div>,
    document.getElementById("portal")
  );
}

export default Portal;
