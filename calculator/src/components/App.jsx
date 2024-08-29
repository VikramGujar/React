import React from "react";
import * as Math from './Math';

function App (){
    return (
        <div>
            <p>Add ={Math.Add(30,5)}</p>
            <p>Sub ={Math.Sub(30,5)}</p>
            <p>Mul ={Math.Mul(30,5)}</p>
            <p>Div ={Math.Div(30,5)}</p>
            <p>Mod ={Math.Mod(30,5)}</p>
        </div>
    );
}

export default App;