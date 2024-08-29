import React from "react";
import Card from "./Card";
import contact from "../contact";

function App(){
    return (
        <dir>
        <Card 
        name = {contact[0].name}
        img = {contact[0].img}
        phone = {contact[0].phone}
        email = {contact[0].email}
        />

        <Card 
        name = {contact[1].name}
        img = {contact[1].img}
        phone = {contact[1].phone}
        email = {contact[1].email}
        />
        </dir>
    );
}

export default App;