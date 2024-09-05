import React, { useState } from "react";


function Form() {

    const [contact,setContact] = useState({
        fName : "",
        lName : "",
        eMail : ""
    });

    function handleInput(event){
        const {name,value} = event.target;

        setContact(prevValue => {
            if(name === "fname"){
                return {
                    fName : value,
                    lName : prevValue.lName,
                    eMail : prevValue.eMail
                };
            }else if(name === "lname"){
                return {
                    fName : prevValue.fName,
                    lName : value,
                    eMail : prevValue.eMail
                };
            }else if(name === "eMail"){
                return {
                    fName : prevValue.fName,
                    lName : prevValue.lName,
                    eMail : value
                };
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
                    // value={contact.fName}
                />


                <input
                    type="text"
                    name="lname"
                    placeholder="Enter last name"
                    className="input-box"
                    onChange={handleInput}
                    // value={contact.lName}
                />

                    <input
                    type="text"
                    name="eMail"
                    placeholder="Enter last name"
                    className="input-box"
                    onChange={handleInput}
                    // value={contact.eMail}
                />

                <button
                    className="submit-btn"
                >Submit</button>
            </form>
            <div>
            <h1>Hello! {contact.fName} {contact.lName}</h1>
            <p>{contact.eMail}</p>
            </div>
        </div>
    )
}

export default Form;