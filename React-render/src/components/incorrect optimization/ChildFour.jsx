import React from 'react'

const ChildFour = ({name}) => {
    const date = new Date();
    console.log("ChildMemo re-render");
    return (
        <div>
            <h1>Child components</h1>
            <p> Hello {name}.Time is {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
        </div>
    )
}

export default React.memo(ChildFour)
