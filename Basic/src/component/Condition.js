import React from "react";

class Condition extends React.Component {
  constructor() {
    super();
    this.state = {
      logic: false,
    };
  }
  clickme() {
    this.setState({
      logic: !this.state.logic,
    });
  }
  render() {
    //   if (this.state.logic){
    //       return <div>Logic is true</div>
    //   }else{
    //       return <div>Logic is false</div>
    //   }
    
    // Ternary
    // return this.state.logic? <div>Logic is true</div> :  <div>Logic is false</div> 

    // Short circuit
    return (
      <>
        {this.state.logic && <div>Now i amable to run</div>}
        <button onClick={this.clickme.bind(this)}>Toggle</button>
      </>
    );
  }
}
export default Condition;
