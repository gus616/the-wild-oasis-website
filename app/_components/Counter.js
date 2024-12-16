"use client";
import { useState } from "react";
const Counter = ({users}) => {

    const [count, setCount] = useState(0);

    console.log(users); 
    return(
        <>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <p>There are {users?.length} users </p>
        </>
    )
};

export default Counter;
