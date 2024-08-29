import React from "react";
import Header from "./Header";
import emojiData from '../emojoData';
import Data from './Data';

 


function App() {
    return (
        <div>
            <Header />
            <div className="data">
                {emojiData.map((e) => {
                    return (
                    <Data 
                    key = {e.id}
                    emoji = {e.emoji}
                    name = {e.name}
                    meaning = {e.meaning}
                    />);
                })}
            </div>
        </div>
    );
}


export default App;