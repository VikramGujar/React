import React from "react";

function RandumImage() {

        let image = "https://picsum.photos/200"
    return (
        <div className="rdimg">
            <h1>Random IMG</h1>
            <img alt='randum-img' src={image}/>
        </div>
    );
}

export default RandumImage;