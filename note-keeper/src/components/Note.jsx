import React from "react";

function Note(props){

    function gotClick()
    {
        props.dltClick(props.id)
    }

    return (
        <div className="main-note-container">
        <div className="note">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button
            onClick={gotClick}
            className="dlt"
            >Delete</button>
        </div>
        </div>
    );
}

export default Note;