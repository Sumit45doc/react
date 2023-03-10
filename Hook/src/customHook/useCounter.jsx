import {useState} from 'react'

function useCounter() {
    const [count, setCount] = useState(0);

    const increamentHandler = () => {
        setCount((prevCount) => prevCount + 1);
      };
      return [increamentHandler,count]
}

export default useCounter
