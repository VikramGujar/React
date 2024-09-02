import React from 'react';
import ReactDom from 'react-dom/client';
import App from './components/App';



const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
  <App />
)














// import animals,{useAnimal} from './anilamData';


// console.log(animals)

// const [Lion , Elephant] = animals;

// console.log(Lion)

// console.log(Lion.lifespan)

// const {name : LionName , species : LionSpecies , habitat : LionHabitat = "Eating and Meeting"} = Lion;

// console.log(LionName)
// console.log(LionSpecies)
// console.log(LionHabitat)

// const{name , species , habitat , foodRequerment:{food , water}} = Elephant;

// console.log(name,species,habitat,food,water);
