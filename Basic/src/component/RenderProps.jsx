//alternative of HOC 
import React, { Component } from "react";

class RenderProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  changeHandler = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    return (
      <div>
        {this.props.children(this.state.count,this.changeHandler)}
      </div>
    );
  }
}

export default RenderProps;
