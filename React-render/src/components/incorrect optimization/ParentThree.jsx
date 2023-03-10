import React from 'react'
import ChildThree from './ChildThree';

function ParentThree({children}) {
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
            
            <ChildThree name={name}>
                <strong>Hello</strong>
            </ChildThree>
        </div>
    )
}

export default ParentThree
