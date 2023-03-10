import React from 'react'

const Child = () => {
    console.log("Child re-render");
    return (
        <div>
            <h1>Child components</h1>
        </div>
    )
}

export default Child
