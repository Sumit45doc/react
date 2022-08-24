//Re-render not possible if  shallow comparison complex type
//Parent comp dont re-render than child also does not render
import React, { PureComponent } from "react";
 
export default class PureComp extends PureComponent {
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
        name: "sukriti",
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
