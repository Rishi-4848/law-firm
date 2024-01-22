import React from 'react';
import logo from "../../Assests/Logo.png";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import "./Footer.css";


const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <div className='footer__header'>

        <div className='footer__logo'>
         <img src={logo} alt='logo'/>
        </div>

      
        <ul className='footer__navbar-tabs'>
        <li> <a href='#home'>Home</a> </li>
        <li><a href='#attorney'>Attorney</a> </li>
        <li><a href='#practice' >Practice Areas</a> </li>
        <li><a href='#about'>About Us</a> </li>
      </ul>

      <div className='footer__social'>
      <FaInstagram className='social__icon'/>
      <FaFacebook className='social__icon'/>
      <FaTwitter className='social__icon'/>
      <FaPinterest className='social__icon'/>
      </div>
        

      </div>

      <div className='footer__license'>
      <p>© 2020 Acme. All right reserved.</p>
      <p>Privacy Policy</p>
      <p>Terms of Service</p>
      </div>
    </div>
  );
}

export default Footer;
