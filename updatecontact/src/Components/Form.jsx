import React, { useState } from "react";


function Form() {

    const [fullName,setFullName] = useState({
        fName : "",
        LName : ""
    })

    function handleInput(event){
        const [name,value] = event.taget;

        setFullName(prevValue=>{
            if(name === "fname"){
                return {
                    fName : value,
                    LName : prevValue.LName
                }
            }else if(name === "lname"){
                return {
                    fName : prevValue.fName,
                    LName : value
                }
            }
        })

    }
    

    return (
        <div>
            <form>
                <h1>Submit details</h1>
                <input
                    type="text"
                    name="fname"
                    placeholder="Enter first name"
                    className="input-box"
                    onChange={handleInput}
                    value={fullName.fName}
                />


                <input
                    type="text"
                    name="lname"
                    placeholder="Enter last name"
                    className="input-box"
                    onChange={handleInput}
                    value={fullName.LName}
                />

                <button
                    className="submit-btn"
                >Submit</button>
            </form>
            <div>
            <h1>Hello! {fullName.fName} {fullName.LName}</h1>
            </div>
        </div>
    )
}

export default Form;