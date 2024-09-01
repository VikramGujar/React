import React, {useState} from "react";


function ShowTime(){
    
    setInterval(updateTime,1000);
    const now = new Date().toLocaleTimeString();

    const [time , changeTime] = useState(now)


    function updateTime(){
        const newTime = new Date().toLocaleTimeString();

        changeTime(newTime);
    }
    return (
        <div className="div-container">
            <h1>Current Time</h1>
            <p id="time">{time}</p>
        </div>
    )
}

export default ShowTime;