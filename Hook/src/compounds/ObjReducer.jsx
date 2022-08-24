import React, { useReducer } from "react";

function ObjReducer() {
  let initialState = {
    number1: 0,
    number2: 0,
    num: 0,
  };

  const reducer = (state, action) => {
    switch (action.key) {
      case "add": {
        // console.log(state.number1, state.number2,state.num);
        // state.number1 = state.number1 + 1;
        // state.number2 = state.number2 + 1;
        // console.log(state.number1, state.number2, state.num);
        return { ...state, number1: state.number1 + action.value };
      }
      default:
        return { number1: state.number1 };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {console.log(state)}
      <p>{state.num}</p>
      <button
        onClick={() => {
          dispatch({ key: "add", value: 1 });
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ObjReducer;
