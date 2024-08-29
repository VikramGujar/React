import React from "react";
import Detail from './Details';

function Card(props){
    return (
        <div className="card">
            <div className="card-up">
            <h1>{props.name}</h1>
            <img src={props.img} alt="img"/>
            </div>
            <div className="card-down">
            <Detail detailInfo = {props.phone} />
            <Detail detailInfo = {props.email}/>
            </div>
        </div>
    );
}

export default Card;