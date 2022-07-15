import React from 'react'
import '../Components/CSS/Body4_main.css'
import Body4_1 from './Body4_1'
import Body4_2 from './Body4_2'
import img2p from '../Images/chooseMeal.svg'
import img1p from '../Images/pickMeal.svg'
import img3p from '../Images/dIcon.svg'

function Body4_main() {
  return (
    <>
      <div className="Body4_container">
        <Body4_1 />
        <div className="cards">
          <Body4_2 imggg={img1p} pickMeal="Pick a Meal" desMeal="Select your favourite foods from our weekly diverse menu"/>
          <Body4_2 imggg={img2p} pickMeal="Choose how often" desMeal="Our team of chefs do the preparation of dishes, no more sink of dishes"/>
          <Body4_2 imggg={img3p} pickMeal="Fast Delieveries" desMeal="Wait just for 15 minutes, your meal is on the way"/>
        </div>
      </div>
    </>
  )
}

export default Body4_main