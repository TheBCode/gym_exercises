import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    let addCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <button onClick={addCount}>+</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;
