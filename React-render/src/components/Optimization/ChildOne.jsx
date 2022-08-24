import React from 'react'

const ChildOne = () => {
    console.log("ChildOne re-render");
    return (
        <div>
            <h1>Child components</h1>
        </div>
    )
}

export default ChildOne
