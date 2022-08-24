import React, { useState, useCallback} from "react";
import UseCallBackTitle from "./UseCallBackTitle";
import UseCallbackButton from "./UseCallbackButton";
import UseCallbackCount from "./UseCallbackCount";

function UseCallBackParent() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(50000);

  const ageFun = useCallback(() => {
   setAge(age + 1);
  },[age]);
  const salaryFun = useCallback(() => {
   setSalary(salary + 5000);
  },[salary]);

 

  return (
    <div>
      <UseCallBackTitle />
      <UseCallbackCount text="Age" count={age} />
      <UseCallbackButton Handler={ageFun}>Increament age</UseCallbackButton>
      <UseCallbackCount text="Salary" count={salary} />
      <UseCallbackButton Handler={salaryFun}>Increament salary</UseCallbackButton>
    </div>
  );
}

export default UseCallBackParent;
