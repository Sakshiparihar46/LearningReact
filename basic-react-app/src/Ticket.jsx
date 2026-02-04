import TicketNo from "./TicketNo"
import "./lottery.css"

export default function Ticket({ticket}){
 return(
    <div>
        {ticket.map((num,idx)=>
            <TicketNo num={num} key={idx}/>
        )}
    </div>
 )
}