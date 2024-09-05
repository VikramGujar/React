import React from "react";


function InputArea(props){
    return(
        <div>
        <input 
            type="text"
            name="task"
            placeholder="Add your task"
            onChange={props.changeInp}
            value={props.takenInput}
            />

            <button
            onClick={props.addButton}
            >Add</button>
        </div>
    )
}


export default InputArea;