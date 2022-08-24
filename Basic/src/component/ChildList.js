import React from 'react'

function ChildList(props) {
    const {studentList} = props
    return (
        <>
            <p>My name is {studentList.name}.My rollno. is {studentList.Roll}.I am trained in {studentList.skill}</p>
        </>
    )
}

export default ChildList

