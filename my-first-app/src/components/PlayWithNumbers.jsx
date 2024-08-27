import React from 'react';

function PlayWithNumbers() {
    const num = 16;
    return <div>
        <p>Your lucky number is {num} </p>
        <p>The random number is {Math.floor(Math.random() * 10)}</p>
        <p>The add of 10 and 7 is {10+7}</p>
        <p>The sub of 20 and 2 is {20-2}</p>
        <p>The mul of 4 and 4 is {4*4}</p>
        <p>The div of 70 and 10 is {70/10}</p>
    </div>
}

export default PlayWithNumbers;