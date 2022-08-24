import React, { useState, useEffect } from "react";

function UnmountEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const changeHandler = (e) => {
    console.log("changeHandler");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", changeHandler);
    return () => {                                              //unmount
      window.removeEventListener("mousemove", changeHandler);
    };
  }, []);

  
  return (
    <div>
      x - {x} Y - {y}
    </div>
  );
}

export default UnmountEffect;
