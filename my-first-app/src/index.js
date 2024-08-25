import React from 'react';
import ReactDom from 'react-dom';

const name = "Vikram";
const lName = "Gujar";
const num = 16;
ReactDom.render(
    <div>
        <h1>Hello World!</h1>
        <h2>Hello React</h2>
        <h3>Hello {name}</h3>
        <h4>My name is {name + " " + lName}</h4>
        <h4>My name is {name + " " + lName}</h4>
        <h4>My name is {`${name} ${lName}`}</h4>
        <p>Your lucky number is {num} </p>
        <p>The random number is {Math.floor(Math.random() * 10)}</p>
        <p>The add of 10 and 7 is {10+7}</p>
        <p>The sub of 20 and 2 is {20-2}</p>
        <p>The mul of 4 and 4 is {4*4}</p>
        <p>The div of 70 and 10 is {70/10}</p>
        <p>Hello, I am Vikram and I know programming languages like</p>
        <ul>
            <li>Java</li>
            <li>C</li>
            <li>C++</li>
            <li>Java Script</li>
        </ul>
    </div>,document.getElementById('root')
)