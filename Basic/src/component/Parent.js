import React from 'react';
import Children from './Children';

class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'sumit'
        }
        this.display = this.display.bind(this)
    }

    display(age){
        alert(`this is from parent and my name is ${this.state.name} and age is ${age}`)
    }

    render(){
        return(
            <>
            <div>Hello my name is {this.state.name}</div>
            {/* <button  onClick={this.display}>here</button> */}
            <Children greedHandler = {this.display} />
            </>
        )
    }

}
export default Parent;