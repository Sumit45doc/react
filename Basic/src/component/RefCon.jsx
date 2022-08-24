import React, { Component } from "react";

export class RefCon extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  componentDidMount() {
   var  r =  this.input.current.innerHTML;
    console.log(r)
  }
  render() {
    return (
      <div ref={this.input}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          voluptatem quisquam cupiditate vero deleniti dicta alias est, harum
          cum itaque! Rerum expedita suscipit eligendi, eius aut earum. Debitis,
          a vero.
        </p>
      </div>
    );
  }
}

export default RefCon;
