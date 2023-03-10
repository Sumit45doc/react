import React, { Component } from "react";
import ChildRef from "./ChildRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  clickHandler = () => {
    this.componentRef.current.focusInput();
  };
  render() {
    return (
      <div>
        <ChildRef ref={this.componentRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    );
  }
}

export default ParentRef;
