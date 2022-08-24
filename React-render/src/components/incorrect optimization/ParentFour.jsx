import React from 'react'
import ChildFour from './ChildFour';
// date doesn't update when we update count - incorrect use of memo

function ParentFour({children}) {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("sumit");
    console.log("ParentThree re-render");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>increament by 1</button>
            <button onClick={() => setCount(1)}>set value to 1</button>
            <button onClick={() => setCount(5)}>set value to 5</button>
            <button onClick={() => setCount(0)}>reset</button>
            <br />
            <button onClick={() => setName("sukriti")}>change Name</button>
            <ChildFour name={name} />
        </div>
    )
}

export default ParentFour
