import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../note";



function App(){
    return (
        <div>
            <Header />
            <div className="main">
            {note.map((n) => (
                <Note 
                key={n.id}
                title = {n.keyword}
                description = {n.description}
                />))}
            </div>
            <Footer />
        </div>
    );
}



export default App;