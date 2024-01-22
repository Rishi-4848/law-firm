import React from 'react';
import HeroImg from "../../Assests/HeroImg.png";
import { MdEmail } from "react-icons/md";
import "./HomePage.css"

const HomePage = () => {
  return (
    <div className='home__container' id='home'>
      <div className='home__info'>
        <h1 className='home__info-header'>
          You don’t have to
          Fight them Alone.
        </h1>
        <p className='home__info-subheader'>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.
        </p>

        <div className='home__info-input'>
          <MdEmail className='home__info-input-icon' />

          <input type='email' placeholder='Enter your email Address' />
          <button>  <a href='#contact' style={{color:"black"}}>Let's Talk</a></button>
        </div>
      </div>
      <div className='home__img'>
        <img src={HeroImg} alt='hero-img' />
      </div>
    </div>
  );
}

export default HomePage;
