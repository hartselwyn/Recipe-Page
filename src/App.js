import React from 'react'
import './App.css';
import Hero from './Hero/Hero.jsx';
import Ingridients from './Ingridients/Ingridients.jsx';
import Instructions from './Instructions/Instructions.jsx';
import Nutrition from './Nutrition/Nutrition.jsx';
import Sign from './Sign/Sign.jsx';

const App = () => {
  return (
    <div>
      <div className="container">
        <Hero />
        <Ingridients />
        <Instructions />
        <Nutrition />
      </div>
      <Sign />
    </div>
  );
}

export default App
