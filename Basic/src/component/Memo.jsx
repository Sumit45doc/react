//use same as purecomponent in function
//use React.memo method
import React from "react";

function Memo(props) {
  let { name } = props;
  console.log(name);
  return <div>{name}</div>;
}

export default React.memo(Memo);
