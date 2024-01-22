import React, { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";
import "./Faq.css";


const Accordin =({question})=>{
  const [toggle,setToggle] = useState(false)
  return(
    <div className='accordin__wrapper'>

      <div className='accordin__question'>

      <h3>{question} ?</h3>
      <div className='icon__div'>
      { toggle ?(
        <CiSquareMinus className='accordin__icon' onClick={()=>setToggle(false)}/>
      ):(
        <CiSquarePlus className='accordin__icon' onClick={()=>setToggle(true)}/>
      )
      }
      </div>
      </div>

      {
        toggle &&(
          <div className='accordin__answer'>
          Amet minim mollit non deserunt ullamco est sit
     aliqua dolor do amet sint. Velit officia consequatduis
     enim velit mollit Exer. Amet minim mollit non deserunt
     ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.
          </div>
        )
      }
     
     <div className='accordin__margin'/>
    </div>
  )
}

const Faq = () => {
  return (
    <div className='faq__wrapper'>

      <div className='faq__header'>
      <h1>FAQ</h1>
      <p>Amet minim mollit non deserunt ullamco est sit
aliqua dolor do amet sint. </p>
      </div>

      <div className='faq__accordin'>
      <Accordin question="Do I need a personal injury report?"/>
      <Accordin question="How much is my case worth?"/>
      <Accordin question="What should I do right after car accidect"/>
      <Accordin question="How much is my case worth?"/>
      </div>
     
    </div>
  );
}

export default Faq;
