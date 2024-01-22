import React, { useRef } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import client1 from "../../Assests/client1.png";
import client2 from "../../Assests/client2.png";
import client3 from "../../Assests/client3.png";
import team1 from "../../Assests/team1.png";
import team2 from "../../Assests/team2.png"
import team3 from "../../Assests/team3.png"
import team4 from "../../Assests/team4.png"
import team5 from "../../Assests/team5.png"
import team6 from "../../Assests/team6.png";

import "./About.css"

const Card = ({name,cardImg}) => {
  return (
    <div className='card__container'>
       <div>
     <img src={cardImg} alt='cardImg'/>
       </div>
       <h1>{name}</h1>
       <h5>Ceo of Hunt</h5>
       <p>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia
consequatduis enim velit mollit Exer.</p>
      
    </div>
  );
}

const TeamCard = ({image,name,cases}) => {
  return (
    <div className="wrapper">
    
      <div className="team__image">
        <img src={image} alt={name}/>
      </div>
      <div className="team__about">
      <h2>{name}</h2>
      <h5>{cases} Cases</h5>
      </div>
     
    </div>
   
  );
}


const About = () => {
  const scrollRef = useRef(null)

  const scroll =(direction)=>{
    const {current} = scrollRef

    if(direction  === "left"){
     current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }

  }
  return (
    <div className='about__wrapper' id='about'>
      <div className='about__header'>
      <h1>What says our happy Clients</h1>
       <div className='arrow__div'>
        <FaArrowLeft className='left__icon' onClick={()=>scroll("left")} />
        <FaArrowRight className='right__icon' onClick={()=>scroll("right")}/>
       </div>
      </div>
      
     
      <div className='client__container'  ref={scrollRef}>
      <Card name="Jane Cooper" cardImg={client1}/>
      <Card name="Devon Lane" cardImg={client2}/>
      <Card name="Robert Fox" cardImg={client3}/>
      <Card name="Jane Cooper" cardImg={client1}/>
      <Card name="Devon Lane" cardImg={client2}/>
      <Card name="Robert Fox" cardImg={client3}/>
      <Card name="Jane Cooper" cardImg={client1}/>
      <Card name="Devon Lane" cardImg={client2}/>
      <Card name="Robert Fox" cardImg={client3}/>
      <Card name="Jane Cooper" cardImg={client1}/>
      <Card name="Devon Lane" cardImg={client2}/>
      <Card name="Robert Fox" cardImg={client3}/>
      </div>

      <div className="teamContainer">
        <div>
        <h1>Our Team</h1>
        </div>
       <div className="cardContainer">
        <TeamCard image={team1} name="Daniel Def" cases="301" className="teamCard"/>
        <TeamCard image={team2} name="Sanfole" cases="850"/>
        <TeamCard image={team3} name="Cesforila" cases="470"/>
        <TeamCard image={team4} name="Collen" cases="180"/>
        <TeamCard image={team5} name="Haldone" cases="212"/>
        <TeamCard image={team6} name="Nik Jeo" cases="350"/>
       </div>
      </div>
      
    </div>
  );
}

export default About;
