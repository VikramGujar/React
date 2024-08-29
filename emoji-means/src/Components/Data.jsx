import React from "react";


function Data(props){
    return (
        <div className="emoji-data">
            <h1>{props.emoji}</h1>
            <h3>{props.name}</h3>
            <p>{props.meaning}</p>
        </div>
    )
}

export default Data;