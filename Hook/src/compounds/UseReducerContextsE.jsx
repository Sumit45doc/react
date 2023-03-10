import React, { useContext } from "react";
import { CountContext } from "../App";

function UseReducerContextsE() {
  let countConsumer = useContext(CountContext);
  return (
    <div>
      <p>{countConsumer.CountState}</p>
      <button
        onClick={() => {
          countConsumer.CountDispatch("increament");
        }}
      >
        increament
      </button>
    </div>
  );
}

export default UseReducerContextsE;
