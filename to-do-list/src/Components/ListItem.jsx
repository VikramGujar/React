import React, {useState} from "react";


function ListItem(props){
    const [isTaskDone,setTaskDone] = useState(false)



    function taskDone(){
        setTaskDone( prevValue => {
            return !prevValue;
        })
    }
    return(
        
            <div>
                    <li
                    onClick={taskDone}
                    style={{textDecoration:isTaskDone?"line-through":"none"}}
                    >{props.newTask}</li>
            </div>
        
    )
}


export default ListItem;