import React, { useState } from "react";
import Form from "./Form";


function App (){
    const [subMsg , setSubmit] = useState("Submit your name");
    const [subTextColor , setSubTextColor] = useState(false);
    const [isMouseIn, setMouseIn] = useState(false)
    const [userName, setUserName] = useState ("");
    const [userLastName, setLastName] = useState("");

    function inputChangeFname(event){
        console.log(event.target.value);
        setUserName(event.target.value);
    }

    function inputChangeLname (event){
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    function mouseEnter(){
        setMouseIn(true)
    }
    function mouseOut(){
        setMouseIn(false)
    }

    function submitName(event){
        setSubmit(`Hello ! ${userName} ${userLastName}`);
        setSubTextColor(true);

        event.preventDefault();
    }
   
    return (
        <div className="main-div">
        <div className="container">
            <h1 
                style={{color:subTextColor?"green":"black"}}>
                {subMsg}
            </h1>
        <form onSubmit={submitName}>
            <input 
                type="text" 
                placeholder="Your first name" 
                onChange={inputChangeFname}
                className="input-box"
                value={userName}
            />

            <input 
                type="text" 
                placeholder="Your last name" 
                onChange={inputChangeLname}
                className="input-box"
                value={userLastName}
            />

            <button 
                className="submit-btn"
                onMouseOver={mouseEnter}
                onMouseOut={mouseOut}
                style={{backgroundColor:isMouseIn?"#9ff8a3":"#4CAF50"}}
                >Submit
            </button>
        </form>
        </div>
        <Form />
        </div>
        
        
    )
}


export default App;