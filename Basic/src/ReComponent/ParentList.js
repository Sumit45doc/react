import React from "react";
import ChildList from "./ChildList";

function ParentList() {
  const student = [
    {
      id: 1,
      name: "sumit",
      Dept: "CSE",
    },
    {
      id: 2,
      name: "Subham",
      Dept: "HPI",
    },
    {
      id: 3,
      name: "Rahul",
      Dept: "B.COM",
    },
  ];

  // const student = ["sumit", "subham", "rahul", "ravi","pd","poddar"];
  const studentList = student.map((value) => <ChildList key={value.id} value={value} />);
  return <div>{studentList}</div>;
}

export default ParentList;
