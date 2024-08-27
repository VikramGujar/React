import React from "react";

function Greet() {
    
const date = new Date();
// let year = date.getFullYear();
let greet;
let tm = date.getHours();
function greetAtTime(){
 
  if(tm<12)
    {
       greet = "Good Morning";
    }else if(tm>12 && tm<16){
       greet = "Good Afternoon";
    }else if(tm>16 && tm<19){
       greet = "Good Evinig";
    }else{
       greet = "Good Night";
    }
}
    greetAtTime();
    return (
        <div className="greet">
            <p>Greeting as per the day time</p>
            <h1>{greet}</h1>
        </div>
    );
}

export default Greet;