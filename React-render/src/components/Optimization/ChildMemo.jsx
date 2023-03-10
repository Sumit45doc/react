import React from 'react'

const ChildMemo = ({name}) => {
    console.log("ChildMemo re-render");
    return (
        <div>
            <h1>Child components</h1>
            <p>{name}</p>
        </div>
    )
}

export default React.memo(ChildMemo)
