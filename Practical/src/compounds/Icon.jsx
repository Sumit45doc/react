import React from "react";
import { FaBeer } from "react-icons/fa";
import { IconContext } from "react-icons";
function Icon() {
    let apple = {
        color: "red"
    }
  return (
    <IconContext.Provider value={{color: "blue" , size: "90"}}>
      <div>
        <FaBeer  />
        {/* <FaBeer color="red" size="25rem" />
        <FaBeer color="blue" size="20rem" />
        <FaBeer color="green" size="15rem" />
        <FaBeer color="yellow" size="10rem" />
        <FaBeer color="yellowgreen" size="7rem" />
        <FaBeer color="black" size="4rem" /> */}
      </div>
    </IconContext.Provider>
  );
}

export default Icon;
