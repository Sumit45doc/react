import React, { Component } from "react";

class ChildState extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {`my name is ${this.props.name}`}
        <br />
        <button onClick={this.props.handler}>ChangeName</button>
        <div>{this.props.count}</div>
        <button onClick={this.props.refresh}>refresh</button>
      </div>
    );
  }
}

export default ChildState;
