import React, {useState} from "react";




function Counter(){
    const [count , setCount] = useState(0);

    function increase()
    {
    setCount(count + 1);
    }
    
    function decrease()
    {
    setCount(count - 1);
    }

    return (
        <div className="counter-container">
            <p className="counter-value">{count}</p>
            <div className="counter-buttons">
                <button onClick={increase}>+</button>
                <button onClick={decrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;