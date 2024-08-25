import React from 'react';
import ReactDom from 'react-dom';

const d = new Date();
let year = d.getFullYear();

let tm = d.getTime();
console.log(tm)


let greet = "Good Morning";

const name = "Vikram";
let image = "https://picsum.photos/200"

let custumStyle = {
  color:"red",
  border:"1px solid black"
};



ReactDom.render(
  <div className="footer">
    <div className='rdimg'>
          <h1>Random IMG</h1>
          <img src={image}/>
    </div>
    <div className='img'>
    <img src='https://media.licdn.com/dms/image/D4D12AQErV5S_buj95w/article-cover_image-shrink_600_2000/0/1662363673907?e=2147483647&v=beta&t=FLqEHqQ_zKwj_8qH6Thrac6b2KhPN9yLjxHf0bOxw1A' />
    <img src='https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210401151214/What-is-Website.png' />
    <img src='https://www.sitesaga.com/storage/2020/04/what-is-website-how-it-works.png' />
    </div>
    <p>Created by {name}</p>
    <p>{greet}</p>
    <h1 style={custumStyle}>copyright ©{year}. All rights riserve</h1>
  </div>,
  document.getElementById('root')
)