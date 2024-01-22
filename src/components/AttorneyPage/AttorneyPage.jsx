import React from 'react';
import "./AttorneyPage.css";
import Card from '../Card/Card';

const AttorneyPage = () => {
  return (
    <div className='attorney__container' id='attorney'>
   
   <div className='attorney__header'>
   <div className='attorney__intro'>
       
       <h1>Let’s Introduce Ourself</h1>
       </div>

       <div className='attorney__margin'/>

       <div className='attorney__info'>
        <h1>Criminal Lawyer</h1>
        <p> Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
      </div>
   </div>
      
      <div className='attorney__card-container'>
      <h1>Why Choose us?</h1>
      <div className='attorney__card-div'>
    <Card rate={98}/>
    <Card rate={100}/>
    <Card rate={100}/>
      </div>
      </div>
    </div>
  );
}

export default AttorneyPage;
