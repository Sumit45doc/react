import React from "react";

function ChildList(props) {
    const {name , Dept , id} = props.value
  return (
    <ul>
      <li>{`My name is ${name} from department ${Dept},Id is ${id}`}</li>
    </ul>
  );
}

export default ChildList;
