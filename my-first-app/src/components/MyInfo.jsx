import React from "react";

function MyInfo() {
    const name = "Vikram";
    const lName = "Gujar";

    return <div>
        <h1>Hello World!</h1>
        <h2>Hello React</h2>
        <h3>Hello {name}</h3>
        <h4>My name is {name + " " + lName}</h4>
        <h4>My name is {name + " " + lName}</h4>
        <h4>My name is {`${name} ${lName}`}</h4>

    </div>
}

export default MyInfo;