import React from "react";
import RandumImage from "./RandumImage";
import Greet from "./Greet";
import Footer from "./Footer.jsx";

function App() {
    return (
        <div>
            <div className="rd-images">
            <RandumImage />
            <RandumImage />
            <RandumImage />
            </div>
            <Greet />
            <Footer />
        </div>
    );
}

export default App;





