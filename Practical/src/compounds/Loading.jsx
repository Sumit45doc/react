import React from "react";
import { BounceLoader, BarLoader, BeatLoader } from "react-spinners";
function Loading() {
  return (
    <div>
      <BounceLoader color="blue" loading={true} />
      {/* <BarLoader size={72} loading={true} /> */}
      <BeatLoader size={72} loading={true} />
    </div>
  );
}
export default Loading;
