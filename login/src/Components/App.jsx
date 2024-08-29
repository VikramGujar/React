import React from "react";
import Form from "./Form";

var logIn = true;
console.log(logIn)


function App(){
    return (
        <div>
            {logIn?<Form />:<h1>Hello</h1> } 
            
        </div>
    )
}

export default App;
