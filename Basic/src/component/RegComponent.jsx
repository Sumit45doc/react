import React, { Component } from "react";

export default class RegComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sumit",
    };
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler() {
    setInterval(() => {
      this.setState({
        name: "sumit",
      });
    }, 1000);
  }

  render() {
    console.log(this.state.name);
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeHandler}>change name</button>
      </div>
    );
  }
}
