import React, { useState, useEffect , useRef } from "react";

function UseRefPara() {
  const [count, setCount] = useState(0);
    let intervalRef = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
        setCount(prevcount => prevcount + 1)
    }, 1000);
    return () => {
        clearInterval(intervalRef.current)
    };
  }, []);

  return <div><p>{count}</p><button onClick={()=>clearInterval(intervalRef.current)} >stop</button></div>;
}

export default UseRefPara;
