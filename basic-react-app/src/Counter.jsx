import { useState,useEffect} from "react"
export default function(){
let [countX,setCountX]=useState(0);
let [countY,setCountY]=useState(0);
     let inCountX=()=>{
        setCountX((currCount)=> currCount+1);
     }
     let inCountY=()=>{
        setCountY((currCount)=> currCount+1);
     }

     useEffect(function printSomething(){
        console.log("this is a side effect");
     },[])
    return <div>
        <h3>countX={countX}</h3>
        <button onClick={inCountX}>+1</button>
        <h3>countY={countY}</h3>
        <button onClick={inCountY}>+1</button>
    </div>
} 

