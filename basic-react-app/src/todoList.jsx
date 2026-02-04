import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Todo(){
    let [todos,setTodos]=useState([{task:"sample-task",id:uuidv4(),isTask:false}]);
    let[newTodo,setNewTodo]=useState("");

    let addNewtask=()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos,{task:newTodo,id:uuidv4(),isTask:false}]
        })
       setNewTodo("");
    }


    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };


    let deleteTodo=(id)=>{
          setTodos((prevTodos)=>
            prevTodos.filter((prevTodos)=>prevTodos.id !=id)
        );
    }

    let upperCaseAll=()=>{
       setTodos((prevTodos)=>prevTodos.map((todo)=>{
           return{
            ...todo,
            task:todo.task.toUpperCase()
           }
        }));
    };

     let markAsDone=(id,isTask)=>{
       setTodos((prevTodos)=>prevTodos.map((todo)=>{
        if(todo.id ==id){
           return{
            ...todo,
            isTask:true
           }
        }else{
            return todo;
           }
        }));
    };
     let upperCaseOne=(id)=>{
       setTodos((prevTodos)=>prevTodos.map((todo)=>{
        if(todo.id ==id){
           return{
            ...todo,
            task:todo.task.toUpperCase()
           }}else{
            return todo;
           }
        }));
    };
    return(
        <>
        <input type="text"  placeholder="add your task" onChange={updateTodoValue} value={newTodo}/><br /><br />
        <button onClick={addNewtask}>add</button>
        <br/>
        <br/>
        <hr />
        <h4>todo list</h4>
        <ul>
            {
                todos.map((todo)=>(
                <li key={todo.id}>
                  <span  style={todo.isTask?{textDecorationLine:"line-through"}:{}}>{todo.task}</span>
                  &nbsp;&nbsp;&nbsp;
                  <button onClick={()=>deleteTodo(todo.id)}>delete</button>&nbsp;&nbsp;&nbsp;
                  <button onClick={()=>upperCaseOne(todo.id)}>UpperCaseOne</button>&nbsp;&nbsp;&nbsp;
                  <button onClick={()=>markAsDone(todo.id,todo.isTask)}>markAsDone</button>
                  <br /><br />
                    </li>
                ))
            }
        </ul>

        <button onClick={upperCaseAll}>UpperCaseAll</button>
        </>
    )
}