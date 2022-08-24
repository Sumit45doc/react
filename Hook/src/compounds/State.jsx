import React, { useState } from "react";

function State() {
  let num = 0;
  const [count, increment] = useState(num);
  const changeHandler = () => {
    increment((prevCount) => prevCount + 1);
    increment((prevCount) => prevCount + 1);
    increment((prevCount) => prevCount + 1);
    increment((prevCount) => prevCount + 1);
    increment((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => increment((prevCount) => prevCount + 1)}
        style={{ margin: "0 1rem" }}
      >
        increment
      </button>
      <button
        onClick={() => increment((prevCount) => prevCount - 1)}
        style={{ margin: "0 1rem" }}
      >
        decrement
      </button>
      <button onClick={() => increment(num)} style={{ margin: "0 1rem" }}>
        reset
      </button>
      <button onClick={() => changeHandler()} style={{ margin: "0 1rem" }}>
        increament 5
      </button>
    </div>
  );
}

export default State;
