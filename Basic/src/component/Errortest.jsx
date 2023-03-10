import React, { Component } from 'react'

class Errortest extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             errorHandle: false
        }
    }
static getDerivedStateFromError(error){
    return {errorHandle: true}
}    
    render() {
       if(this.state.errorHandle){
           return <h1>Wrong</h1>
       }else{
           return this.props.children
       }
    }
}

export default Errortest
