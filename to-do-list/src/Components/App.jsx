import React, { useState } from "react";
import ListItem from "./ListItem";
import InputArea from "./InputArea";

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
    function deleteItem(id){
        return (
            setTasks(prevValue => {
                return prevValue.filter((Item,index) => {
                    return index !==id
                })
            })
        )
    }



    return(
        <div className="main-div">
            <h1>To-Do-List</h1>
            <InputArea 
            changeInp = {handleInput}
            takenInput = {toDoInput}
            addButton = {handleAdd}
            />
        <ul>
                {allTasks.map(
                (entryItem,index) => 
                <ListItem
                key = {index}
                id = {index}
                taskDone = {deleteItem} 
                newTask = {entryItem}
                />)}
        </ul>
            
        </div>
    );
};


export default App;