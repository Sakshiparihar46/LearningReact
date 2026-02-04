import { useState } from "react"

export default function Counter(){
    let [count,setCount]=useState(0);
    console.log("Component is rendered : ");
    console.log(`${count}`);
    let increaseCount=()=>{
        setCount(count+1);
        console.log(`inside increase count is ${count}`)
    }
     return (
        <>
        <h3>count={count}</h3>
        <button onClick={increaseCount}>increase count</button>
        </>
     )
}

