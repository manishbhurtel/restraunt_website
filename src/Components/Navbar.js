import React, {useState} from 'react'
import '../Components/CSS/Navbar.css'
import navLOGO from '../Images/navlogo.png'
import searchLOGO from '../Images/search.png'

export default function Navbar() {
  const [searchBTN, setsearchBTN] = useState("hidden")
  const searchClicked = ()=>{
    if(searchBTN === "hidden"){
      setsearchBTN("")
    }
    else{
      setsearchBTN("hidden")
    }
  }
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <a href={navLOGO} target="new"><img src={navLOGO} alt="navLogo" /></a>
        </div>


        <div className="contents">
          <ul>

            <li className='li1 lii'>Foods & Servcies +
              <div className="content1 content">
                <ul className='ul1'>
                  <li className='lists'>Chicken Fries</li>
                  <li className='lists'>Biscuits</li>
                  <li className='lists'>Apple Pie</li>
                  <li className='lists'>Corn Bread</li>
                  <li className='lists'>Country Fried Steak</li>
                  <li className='lists'>Pancakes</li>
                  <li className='lists'>Mac & Cheese</li>
                  <li className='seeMore'>See More +</li>
                </ul>
              </div>
            </li>

            <li>Explore</li>
            <li>Menu</li>

            <li className='li2 lii'>Products +
              <div className="content2 content">
                <ul className='ul2'>
                  <li className='lists'>Vegetable</li>
                  <li className='lists'>Fruits</li>
                  <li className='lists'>Dry Fruits</li>
                  <li className='lists'>Fries</li>
                  <li className='lists'>Drinks</li>
                  <li className='seeMore'>See More</li>
                </ul>
              </div>
            </li>

            <div className="search_container">
              <div className="search" onClick={searchClicked}>
                <img src={searchLOGO} alt="searchLogo" />
              </div>
              <input type="search" className={`search2 ${searchBTN}`} placeholder='Search...' />
            </div>


          </ul>
        </div>


      </div>
    </>
  )
}
