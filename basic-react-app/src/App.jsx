import './App.css'
import Counter from "./Counter"
import LikeButton from './LikeButton'
import LudoBoard from './LudoBoard'
import Todo from './todoList'
import Lottery from './lottery'
import Ticket from './Ticket.jsx'
import {sum} from "./helper"
function App() {
  let winCondition=(ticket)=>{
    return ticket.every((num)=>num===ticket[0]);
  }
  return (
    <>
      <Lottery n={3} winCondition={winCondition}/>
    </>
  )
}

export default App;
