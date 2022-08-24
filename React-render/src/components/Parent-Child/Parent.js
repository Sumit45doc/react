import React from 'react'
import Child from './Child';

function Parent() {
    const [count, setCount] = React.useState(0);
    console.log("useState re-render");
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount((c) => c + 1)}>increament by 1</button>
            <button onClick={() => setCount(1)}>set value to 1</button>
            <button onClick={() => setCount(5)}>set value to 5</button>
            <button onClick={() => setCount(0)}>reset</button>
            <Child />
        </div>
    )
}

export default Parent
