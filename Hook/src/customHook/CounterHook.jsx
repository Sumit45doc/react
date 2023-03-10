import React from "react";
import useCounter from "./useCounter";

function CounterHook() {
  const [increamentHandler, count] = useCounter();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increamentHandler}>Increament</button>
    </div>
  );
}

export default CounterHook;
