import React from "react";
import ReactPlayer from "react-player";
function Video() {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "800px",
  };
  return (
    <div style={style}>
      {/* <div style={{height: "300px" , width: "440px"}} > */}
      <ReactPlayer
        url="https://youtu.be/_KhGdZEWC4c"
        controls
        onPause={() => {
          console.log("pause");
        }}
        onStart={()=>{
            console.log("start")
        }}
        onBuffer={()=>{
            console.log("buffering")
        }}
      />
      {/* </div> */}
    </div>
  );
}

export default Video;
