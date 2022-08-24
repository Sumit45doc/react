import React, { useReducer } from "react";

let initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increament":
      return state + 1;
    case "decreament":
        return state - 1;
    default:
      return state;
  }
};

function BasicReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>{state}</p>
      <button onClick={()=>{dispatch("increament")}} >increament</button>
      <button onClick={()=>{dispatch("decreament")}} >increament</button>
    </div>
  );
}

export default BasicReducer;
