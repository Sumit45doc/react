//As the code was repeat able in some component "HOC is used"
import React, { Component } from "react";
import HocCounter from './HocCounter'
class HocHover extends Component {
  render() {
    const { count, changehandler } = this.props;
    return (
      <div>
        <button onClick={changehandler}>Count: {count}</button>
      </div>
    );
  }
}

export default HocCounter(HocHover);
