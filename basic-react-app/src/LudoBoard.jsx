import {useState} from "react";
export default function (){
    let [Moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    let [arr,setArr]=useState(["no moves"]);
    let updateBlue=()=>{
        // setMoves((prevMoves)=>{
        //     return{...prevMoves,blue:prevMoves.blue+1}
        // });
     
       setArr([...arr,"blue"]);
       console.log(arr);
    }
    let updateYellow=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,yellow:prevMoves.yellow+1}
        });
        console.log(`moves=${Moves.yellow}`);
    }
    let updateRed=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,red:prevMoves.red+1}
        });
        console.log(`moves=${Moves.red}`);
    }
    let updateGreen=()=>{
        setMoves((prevMoves)=>{
            return{...prevMoves,green:prevMoves.green+1}
        });
        console.log(`moves=${Moves.green}`);
    }
    return(
       <div>
        <p>ludo board</p>
        <p>{arr}</p>
        <div className="board">
            <p>blue moves={Moves.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>yellow moves={Moves.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
            <p>red moves={Moves.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
            <p>green moves={Moves.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        </div>
       </div>
    )
}