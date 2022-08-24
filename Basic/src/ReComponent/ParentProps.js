import React from 'react'
import ChildProps from './ChildProps'

function ParentProps() {
    const display = (names,age) =>{
        return `My name is ${names} and I am ${age} years old.`
    }
    return (
        <React.Fragment>
            {/* <ChildProps name='sumit' /> */}
            <ChildProps name="sharma" getfun={display}/>
        </React.Fragment>
        )
}

export default ParentProps
