import React from 'react'
import ChildFive from './ChildFive';
// Here childFive also re-render because person object is recreated as parent component re-rendered.So object becomes new object for childFive props.
function ParentFive({children}) {
    const [count, setCount] = React.useState(0);
    const [name, setName] = React.useState("sumit");
    console.log("ParentFive re-render");
    const person = {
        firstName: "Sumit",
        secondName: "Sharma"
    }

    const handler = () => { };
    const memorizedPeron = React.useMemo(() => person, []);
    const memorizedHandler = React.useCallback(handler, []);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>increament by 1</button>
            <button onClick={() => setCount(1)}>set value to 1</button>
            <button onClick={() => setCount(5)}>set value to 5</button>
            <button onClick={() => setCount(0)}>reset</button>
            <br />
            <button onClick={() => setName("sukriti")}>change Name</button>
            <ChildFive name={name} person={memorizedPeron} fun={memorizedHandler} />
        </div>
    )
}

export default ParentFive
