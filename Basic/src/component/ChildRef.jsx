import React, { Component } from "react";

class ChildRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <form action="">
          <input type="text" name="" id="" ref={this.inputRef} />
        </form>
      </div>
    );
  }
}

export default ChildRef;
