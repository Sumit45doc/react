import React from "react";
import { UserCosumer } from "./MainContext";

function ContextFile2() {
  return (
    <div>
      <UserCosumer>
        {(username) => {
         return <div>My name is {username}</div>;
        }}
      </UserCosumer>
      <p>Hello world</p>
    </div>
  );
}

export default ContextFile2;
