import React from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    let addCount = () =>{
        setCount(prevCount + 1)
    }
    return (
        <div>
            <button onclick={(count)=>{setCount}}>+</button>
            <h1>{count}</h1>
        </div>
    );
};

export default Counter;
