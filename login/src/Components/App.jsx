import React from "react";
import RegistLog from "./Register";

var logIn = false;
console.log(logIn)

let nowTime = new Date().getHours();
console.log(nowTime);


function App(){
    return (
        <div>
            <RegistLog isRegister = {logIn}
            />  
            {nowTime>23 && alert("Why you are still working go to sleep")}                                    
        </div>
    )
}

export default App;
