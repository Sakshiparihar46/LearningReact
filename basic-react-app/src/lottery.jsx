import {useState} from "react";
import "./lottery.css"
import { genTicket,sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWinning=winCondition(ticket);

    let getNo=()=>{
        setTicket(genTicket(n));
    }
    return(
        <>
        <div>
            <h1>lottery</h1>
            <div className="ticket">
                <Ticket ticket={ticket}/>
            </div><br />
            <button onClick={getNo}>get lottery no</button>
            <h3>{isWinning &&"congratulation!, you won"}</h3>
        </div>
        </>
    )
}