import React from "react";
import ContextB from "./ContextB";
import ContextC from "./ContextC";

export const context = React.createContext();
let ContextProducer = context.Provider;
// let ContextConsumer = context.Consumer;

function ContextA() {
  return (
    <div>
      <ContextProducer value="sumit">
        <ContextB />
      </ContextProducer>
    </div>
  );
}

export default ContextA;
