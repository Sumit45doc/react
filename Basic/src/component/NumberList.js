import React from "react";
import ChildList from "./ChildList";

function NumberList() {
  const arr = [1, 2, 3, 4];
  const student = [
    {
      Roll: 1,
      name: "sumit",
      skill: "React",
    },
    {
      Roll: 2,
      name: "Roman",
      skill: "vue",
    },
    {
      Roll: 3,
      name: "suraj",
      skill: "Anglar",
    },
  ];
//   var numberList = arr.map((num) => <h1> {num * 2} </h1>);
  const studentList = student.map(s => <ChildList studentList = {s}/>)
  return <>{studentList}</>;
}

export default NumberList;
