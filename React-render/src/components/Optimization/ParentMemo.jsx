import React from 'react'
import ChildMemo from './ChildMemo';

function ParentMemo({children}) {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("sumit");
    console.log("ParentMemo re-render");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>increament by 1</button>
            <button onClick={() => setCount(1)}>set value to 1</button>
            <button onClick={() => setCount(5)}>set value to 5</button>
            <button onClick={() => setCount(0)}>reset</button>
            <br />
            <button onClick={() => setName("sukriti")}>change Name</button>
            
            <ChildMemo name={name}/>
        </div>
    )
}

export default ParentMemo
