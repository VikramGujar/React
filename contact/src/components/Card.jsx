import React from "react";

function Card(props){
    return (
        <div className="card">
            <div className="card-up">
            <h1>{props.name}</h1>
            <img src={props.img} alt="img"/>
            </div>
            <div className="card-down">
            <p>Phone : {props.phone}</p>
            <p>E-mail{props.email}</p>
            </div>
        </div>
    );
}

export default Card;