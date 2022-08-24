import React, { useState } from "react";
import Modal from "react-modal";

function ModalPortal() {
  const [state, setstate] = useState(false);
  const open = () => {
    setstate(true);
  };
  const closeModal = () => {
    setstate(false);
  };
  const customStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      fontSize: "20px",
    },
    overlay: {
      backgroundColor: "whitesmoke",
    },
  };
  Modal.setAppElement("#root");
  return (
    <div>
      <button onClick={open}>Open</button>
      <Modal isOpen={state} onRequestClose={closeModal} style={customStyle}>
        {/* <p>hello world</p> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure
          corrupti quae sit voluptate impedit non perspiciatis error incidunt
          eaque quibusdam libero suscipit reiciendis officia, eos deserunt
          repudiandae, molestiae provident molestias quasi quidem sint assumenda
          unde! Fugit itaque nesciunt saepe hic id impedit soluta excepturi
          facere? Maiores eveniet ea quos ab obcaecati natus nihil. Eaque
          corporis possimus, harum, quisquam hic et magni illo reiciendis quod
          excepturi, facere minus ex quasi est obcaecati odio ipsam?
          Consequuntur ab aut iste reiciendis explicabo nam perspiciatis porro
          nemo sapiente. Atque ipsum dignissimos, temporibus veritatis velit
          adipisci et. Suscipit at omnis, rerum ipsum cumque amet.
        </p>
        <button onClick={() => setstate(false)}>close</button>
      </Modal>
    </div>
  );
}

export default ModalPortal;
