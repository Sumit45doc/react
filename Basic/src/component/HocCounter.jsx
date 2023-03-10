import React, { Component } from "react";

const HocCounter = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    changehandler() {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    }

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          changehandler={() => this.changehandler()}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};
export default HocCounter;
