import React from "react";

function RegistLog(props){
    return(
        <div className="form-div">
            <h2>{props.isRegister ? "Login" : "Register"}</h2>
            <form action=""></form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="password"/>
            {!props.isRegister && 
            <input type="password" placeholder="Confirm password"/>}
            <button>{props.isRegister ? "Login" : "Register"}</button>
        </div>
    )
}


export default RegistLog;