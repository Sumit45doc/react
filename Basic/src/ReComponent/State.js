import React, { Component } from "react";
import ChildState from "./ChildState";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sumit",
      count: 0,
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler() {
    this.setState({
      name: "sukriti",
    });
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  reFresh = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <div>
        <ChildState
          count={this.state.count}
          name={this.state.name}
          handler={this.changeHandler}
          refresh={this.reFresh}
        />  
      </div>
    );
  }
}

export default State;
