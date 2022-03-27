import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h1>Counter</h1>
        <button onClick={() => setCount(count+1)}> + </button>
        <button onClick={() => setCount(count-1)}> - </button>
        <div>{count}</div>
        </>
    )
}