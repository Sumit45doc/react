import React from 'react'
import { MdDelete } from 'react-icons/md';
const DeleteCell = ({tableProps,data,setData}) => (
    <span
        style={{
            cursor: "pointer",
        }}
        onClick={() => {
            // ES6 Syntax use the rvalue if your data is an array.
            const dataCopy = [...data];
            // It should not matter what you name tableProps. It made the most sense to me.
            dataCopy.splice(tableProps.row.index, 1);
            setData(dataCopy);
        }}
    >
        <MdDelete color={'red'} />
    </span>
)

export default DeleteCell
