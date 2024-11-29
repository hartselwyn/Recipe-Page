import React from 'react'
import './Hero.css'
import img from '../assets/images/image-omelette.jpeg'

const Hero = () => {
  return (
    <div className="hero_page">
      <img src={img} alt="Omelette Image" />
      <h1 className="hero_page_heading">Simple Omelette Recipe</h1>
      <p className="hero_page_info">
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <div className="hero_page_preptime">
        <p>Preparation time</p>
        <ul>
          <li>
            <strong>Total</strong>: Approximately 10 minutes
          </li>
          <li>
            <strong>Preparation</strong>: 5 min minutes
          </li>
          <li>
            <strong>Cooking</strong>: 5 minutes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Hero
