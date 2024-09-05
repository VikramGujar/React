import React, { useState } from "react";
import ListItem from "./ListItem";

function App (){
    const [toDoInput,setInput] = useState("")
    const [allTasks,setTasks] = useState ([]);

   function handleInput (event){
       const taskNow = event.target.value;
       setInput(taskNow);
   }
   function handleAdd(){
    setTasks(prevItem => {
    return [...prevItem , toDoInput]
    })
    setInput("")
} 
    



    return(
        <div className="main-div">
            <h1>To-Do-List</h1>
            <input 
            type="text"
            name="task"
            placeholder="Add your task"
            onChange={handleInput}
            value={toDoInput}
            />

            <button
            onClick={handleAdd}
            >Add</button>
        <ul>
                {allTasks.map(
                entryItem => 
                <ListItem 
                newTask = {entryItem}
                />)}
        </ul>
            
        </div>
    );
};


export default App;