import React from "react";

function Footer() {
    const name = "Vikram";
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="footer">

            <p>Created by {name}</p>
            <h1>copyright ©{year}. All rights riserve</h1>

        </div>
    );

}

export default Footer;