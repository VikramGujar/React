import React, { useState } from "react";


function Form (){
    const [fullName, setFullName] = useState({
        fname : "",
        lname : ""
    }) 

  function changeInInput(event){
    const {name,value} = event.target;

    setFullName(prevValue => {
        if(name === "fname"){
            return{
            fname: value,
            lname: prevValue.lname
        };
    }else if(name === "lname"){
            return{
                lname : value,
                fname : prevValue
            };
        }
    });
}

  


    return (
        <div className="container">
            <form>

                <h1>Hello! {fullName.fname}{fullName.lname}</h1>
                <input 
                type="text" 
                name="fname"
                placeholder="Enter first name"
                className="input-box"
                onChange={changeInInput}
                value={fullName.fname}
                />


                <input 
                type="text" 
                name="lname"
                placeholder="Enter last name"
                className="input-box"
                value={fullName.lname}
                />

                <button 
                className="submit-btn"
                >Submit</button>
            </form>
        </div>
    )

}


export default Form;