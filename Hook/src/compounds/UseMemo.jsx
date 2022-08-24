import React, { useState, useMemo } from "react";

function UseMemo() {
  const [state1, setstate1] = useState(0);
  const [state2, setstate2] = useState(0);

  const changehandler1 = () => {
    setstate1(state1 + 1);
  };

  const changehandler2 = () => {
    setstate2(state2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return state1 % 2 === 0;
  }, [state1]);

  return (
    <div>
      <button onClick={changehandler1}>count {state1}</button>
      <span>{isEven ? "even" : "odd"}</span>
      <button onClick={changehandler2}>count {state2}</button>
    </div>
  );
}

export default UseMemo;
