//Mounting - 4 method :
//1) constructor - first part which get executed ,state and props are assigned, Executes only onces in whole life cycle
//2)static getDerivedStateFromProps(props,state) - runs after constructor ,runs again and again when re-rendered. Can fetch props , state :  can change its value permenantly.Then change will not when declared in this. returns - object
//3)componentDidMount() - runs only ones in whole life cycle.
//4)render - to render , render is call again and again as any change is been;
//Updating - 5 method
//1)static getDerivedStateFromProps(props,state)
//2)shouldComponentUpdate(nextProps,nextState) - use to permit or restrict the update of props and state change
//3)render
//4)getSnapshotBeforeUpdate(prevProps,prevState) - should be use with componentDidUpdate, take the state and props value with was before.Returns null or value
//5)componentDidUpdate(prevProps,prevState,snapshot)

import React, { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      name: "sumit",
      date: "",
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   state.name = "Rahul";
  //   return { name: state.name };
  //   // return null
  // }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log(prevState)
      return prevState
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("update")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  componentDidMount() {
    console.log("component Did Mount");
    // setInterval(() => {
    //   this.setState({ name: "sukriti" });
    //   console.log("componentDidMount-");
    // }, 1000);
  }

  render() {
    console.log("Render");
    return (
      <div>
        <p>{this.state.name}</p>
        {/* <span>{this.state.date}</span> */}
        <button onClick={() => this.changeHandler()}>change</button>
      </div>
    );
  }
}

export default LifeCycle;
