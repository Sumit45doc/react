import React, { Component } from "react";

class RenderPropsFile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { count, changeHandler } = this.props;
    return (
      <div>
        <button onClick={changeHandler}>count: {count}</button>
      </div>
    );
  }
}

export default RenderPropsFile;
