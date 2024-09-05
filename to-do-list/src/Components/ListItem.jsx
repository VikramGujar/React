import React from "react";


function ListItem(props){
    return(
        
            <div>
                    <li
                    onClick={() =>{
                        props.taskDone(props.id)
                    }}
                    >{props.newTask}</li>
            </div>
        
    )
}


export default ListItem;