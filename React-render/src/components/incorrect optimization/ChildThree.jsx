import React from 'react'

const ChildThree = ({children,name}) => {
    console.log("ChildMemo re-render");
    return (
        <div>
            <h1>Child components</h1>
            <p> {children} {name}</p>
        </div>
    )
}

export default React.memo(ChildThree)
