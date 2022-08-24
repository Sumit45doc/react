import React from 'react'

const ChildFive = ({name,person}) => {
    console.log("ChildFive re-render");
    return (
        <div>
            <h1>Child components</h1>
            <p> Hello {name}.My full name is {person.firstName} { person.secondName}</p>
        </div>
    )
}

export default React.memo(ChildFive)
