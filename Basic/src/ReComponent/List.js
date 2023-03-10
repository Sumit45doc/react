import React from "react";

function List() {
  const student = ["sumit", "subham", "rahul", "ravi","pd","poddar"];
  return (
    <div>
      {/* <h1>{student[0]}</h1>
            <h1>{student[1]}</h1>
            <h1>{student[2]}</h1> */}
      {student.map((value,index) => (
        <h1>{value} {index}</h1>
      ))}   
    </div>
  );
}

export default List;
