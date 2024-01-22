import React, { useState } from 'react';
import logo from "../../Assests/Logo.png"
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <div className='app__navbar'>
     <div className='app__navbar-logo'>
     <img src={logo} alt='logo'/>
     </div>
   
      <ul className='app__navbar-tabs'>
        <li> <a href='#home'>Home</a> </li>
        <li><a href='#attorney'>Attorney</a> </li>
        <li><a href='#practice' >Practice Areas</a> </li>
        <li><a href='#about'>About Us</a> </li>
      </ul>
     
     <div className='app__navbar-contact'>
       <button type='button'> <a href='#contact'>Contact Now</a></button>
     </div>

     <div className='dropmenu'>
    <GiHamburgerMenu className='dropmenu__open' onClick={()=>{setToggle(true)}}/>
    <div>
    {toggle && (
      <div className='dropmenu__layout'>
      <IoMdClose className='dropmenu__close' onClick={()=>{setToggle(false)}}/>
      <ul className='dropmenu__tabs'>
      <li> <a href='#home' >home</a> </li>
      <li><a href='#attorney'>Attorney</a> </li>
      <li><a href='#practice' >Practice Areas</a> </li>
      <li><a href='#about'>About Us</a> </li>
    </ul>
   
    </div>
    )}
    </div>
     </div>
    </div>
  );
}

export default Navbar;
