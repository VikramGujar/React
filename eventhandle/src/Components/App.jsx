import React, { useState } from "react";


function App (){
    const [subMsg , setSubmit] = useState("Submit your name");
    const [subTextColor , setSubTextColor] = useState(false);
    const [isMouseIn, setMouseIn] = useState(false)
    const [userName, setUserName] = useState ("");

    function inputChange(event){
        console.log(event.target.value);
        setUserName(event.target.value);
    }

    function mouseEnter(){
        setMouseIn(true)
    }
    function mouseOut(){
        setMouseIn(false)
    }

    function submitName(event){
        setSubmit(`Hello ! ${userName}`);
        setSubTextColor(true);

        event.preventDefault();
    }
   
    return (
        <div className="container">
            <h1 
                style={{color:subTextColor?"green":"black"}}>
                {subMsg}
            </h1>
        <form onSubmit={submitName}>
            <input 
                type="text" 
                placeholder="Your name" 
                onChange={inputChange}
                className="input-box"
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
    )
}


export default App;