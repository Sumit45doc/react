import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = ({ closeToast }) => {
    let style = {
        color: "blue"
    }
  return (
    <div>
      <p style={style} >hello world</p>
      <button onClick={closeToast}>close</button>
    </div>
  );
};

function Toast() {
  const notify = () => {
    toast(<Toaster />, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 3000,
    });
    toast.success(<div>success</div>, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 4000,
    });
    toast.warning(<div>warning</div>, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 5000,
    });
    toast.dark(<div>dark</div>, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000,
    });
    toast.error(<div>red</div>, {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 7000,
    });
    toast.info(<div>red</div>, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 8000,
    });
  };
  return (
    <div>
      <ToastContainer />
      <button onClick={notify}>Notify</button>
    </div>
  );
}

export default Toast;
