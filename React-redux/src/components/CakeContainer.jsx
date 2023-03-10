import React from "react";
import { connect } from "react-redux";
import { Sub, Add } from "../redux";

function CakeContainer({ cake, Sub, Add }) {
  return (
    <div>
      <h1>cake - {cake}</h1>
      <button onClick={Sub}>decreament</button><br/>
      <button onClick={Add}>Add</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cake: state.cake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Sub: () => dispatch(Sub()),
    Add: () => dispatch(Add()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
