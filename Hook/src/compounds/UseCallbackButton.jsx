import React from "react";

function UseCallbackButton({ Handler, children }) {
  console.log(children);
  return (
    <div>
      <button onClick={Handler}>{children}</button>
    </div>
  );
}

export default React.memo(UseCallbackButton);
