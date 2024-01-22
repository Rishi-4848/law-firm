import React from 'react';
import cardImg from "../../Assests/cardimg.png"
import "./Card.css"

const Card = ({rate}) => {
  return (
    <div className='card__container'>
       <div>
     <img src={cardImg} alt='cardImg'/>
       </div>
       <h1>{rate}% Success Rate</h1>
       <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
       <button type='button'>Read More</button>
    </div>
  );
}

export default Card;
