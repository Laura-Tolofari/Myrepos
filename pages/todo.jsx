import { useState } from "react"
import classes from './todo.module.css'

export default function Todo({todo}){
  //declare a state is completed to false
    const [isCompleted,setIsCompleted]=useState(false)
    //create a function to change the value of our state
    console.log(isCompleted);
    //naming a function
  function completedHandle(){
    console.log(todo);
    //set isCompleted state to true
    setIsCompleted(true)
  }
  function undo(){
    setIsCompleted(false)
  }
    return(
    //   //conitional rendering
    //   // if the first condition is true the second condition run
    //    // <div className={isCompleted && classes.completed}>
        <div className={isCompleted ? classes.completed: ''} >
        <li>{todo}</li>
        <button onClick={completedHandle}>Completed</button>
        <button onClick={undo}>Undo</button>
        </div>
     )
}