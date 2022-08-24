import React from "react";
const FRChild = React.forwardRef((props, ref) => {
  return (
    <div>
      <form action="">
        <input type="text" name="" id="" ref={ref} />
      </form>
    </div>
  );
});

export default FRChild;
