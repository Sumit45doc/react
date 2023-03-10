//use for child of child nodes to access props
import React from "react";

const cont = React.createContext();
let UserProvider = cont.Provider;
let UserCosumer = cont.Consumer;

export {UserProvider,UserCosumer}