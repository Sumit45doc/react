import React, { Component } from "react";
import Memo from "./Memo";
class MemoParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "sumit",
    };
  }
  changeHandler(){
      setInterval(() => {
          this.setState({
              name: "sunita"
          })
      }, 1000);
  }
  render() {
    return (
      <div>
        <Memo name={this.state.name}/>
        <button onClick={()=>this.changeHandler()} >click</button>
      </div>
    );
  }
}

export default MemoParent;
