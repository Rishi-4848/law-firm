import React from 'react';
import business1 from "../../Assests/Business1.png";
import business2 from "../../Assests/Business2.png";
import landlord from "../../Assests/LandLord.png";
import elderabuse from "../../Assests/elderAbuse.png";
import partnership from "../../Assests/Partnership.png";
import realestate from "../../Assests/RealEstate.png";
import "./PracticePage.css";


const Grid = ({img1 ,img2,title1,title2})=>{
  return(
    <div className='grid__wrapper'>
      <div className='img__container'>
    <img src={img1} alt={title1}/>
    <h3>{title1}</h3>
      </div>
      <div className='img__container'>
      <img src={img2} alt={title2}/>
    <h3>{title2}</h3>
      </div>
    </div>
  )
}



const PracticePage = () => {

  return (
    <div className='practice__wrapper' id='practice'>
      <h1>Area Of Practices</h1>
      <div className='grids__container'>
      <Grid img1={business1} img2={partnership} title1="Business Law" title2="Partnership Law"/>
       <Grid img1={realestate} img2={business2} title1="Real Estate Law" title2="Business Law"/>
       <Grid img1={landlord} img2={elderabuse} title1="LandLord Disputes" title2="Elder Abuse"/>
      </div>
      
    </div>
  );
}

export default PracticePage;
