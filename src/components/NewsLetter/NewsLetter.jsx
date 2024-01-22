import React from 'react';
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className='newsletter__wrapper' id='contact'>
      <div className='newsletter__border'>
      <h1>Subscribe Our Newsletter</h1>
      <div className='newsletter__input-container'>
      <input type='name' className='name__input' placeholder='Name'/>
      <input type='email' placeholder='Email'/>
      <button type='button' >Send</button>
      </div>
      </div>
    </div>
  );
}

export default NewsLetter;
