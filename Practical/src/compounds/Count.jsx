import React from "react";
import CountUp, { useCountUp } from "react-countup";
function Count() {
  const {countUp, start, pauseResume, reset, update } = useCountUp({ start: 100, end: 500, delay: 2000, duration: 3 , prefix: "$"});
  let a = 5;
  return (

    <div>
        <p>{countUp}</p>
        <button onClick={start} >start</button>
        <button onClick={pauseResume} >pause</button>
        <button onClick={reset} >reset</button>
        <button onClick={()=> update(a)} >update</button>
        <br/>
      <CountUp
        start={2}
        end={50}
        duration={2}
        prefix="$"
        suffix="USD"
        decimals={4}
        decimal=","
        onEnd={() => console.log("ended")}
      />
    </div>
  );
}

export default Count;
