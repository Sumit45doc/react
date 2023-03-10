import React , {useState,useEffect} from "react";

function BasicEffect() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = count; //didmount and didupdate
  });
  return (
    <div>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default BasicEffect;
