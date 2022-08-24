import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";

Modal.setAppElement("#root");
function IdleTimerContainer() {
  const [state, setState] = useState(false);
  
  let idleTimer = useRef(null);
  
  const changeHandler = () => {
    console.log("Your are idle");
    setState(true);
  };
  const closeModal = () => {
    setState(false);
  };

  return (
    <div>
      <IdleTimer ref={idleTimer} timeout={3000} onIdle={changeHandler} />
      <Modal isOpen={state}>
        <p>You are not using</p>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

export default IdleTimerContainer;
