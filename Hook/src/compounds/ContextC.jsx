import React, { useContext } from "react";
import {context} from './ContextA'
function ContextC() {
  var ContextConsumer = useContext(context);  
  return <div>useContext - {ContextConsumer}</div>;
}

export default ContextC;
