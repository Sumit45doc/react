import React from "react";

function UseCallBackTitle() {
  console.log("Title")
  return (
    <div>
      <h1>useCallback Practice</h1>
    </div>
  );
}

export default React.memo(UseCallBackTitle)
