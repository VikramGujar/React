import React from "react";
import Card from "./Card";
import contacts from "../contact";

function creatCard(contacts){
    return (
    <Card 
    key = {contacts.id}
    id = {contacts.id}
    name = {contacts.name}
    img = {contacts.img}
    phone = {contacts.phone}
    email = {contacts.email}
    />
);
}

function App(){
    return (
        <div>
        {contacts.map(creatCard)}
        </div>
    );
}

export default App;