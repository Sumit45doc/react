import React, { useState, useEffect } from "react";

function ConditionEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeHandler = (e) => {
    // console.log("changeHandler");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", changeHandler);
     },[]); //[] removes didupdate
  return (
    <div>
      x - {x} Y - {y}
    </div>
  );
}

export default ConditionEffect;
