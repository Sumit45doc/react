import React, { useRef, useState, useEffect } from "react";

function UseRefInput() {
  const [name, setName] = useState("");
  let inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </div>
  );
}

export default UseRefInput;
