import React from 'react'
import '../Components/CSS/Navbar.css'
import navLOGO from '../Images/navlogo.png'
import searchLOGO from '../Images/search.png'

function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <div className="logo">
          <a href={navLOGO} target="new"><img src={navLOGO} alt="navLogo" /></a>
        </div>


        <div className="contents">
          <ul>
            <li>Foods & Servcies</li>
            <li>Explore</li>
            <li>Menu</li>
            <li>Products</li>
            <div className="search">
              <img src={searchLOGO} alt="searchLogo" />
            </div>
          </ul>
        </div>


      </div>
    </>
  )
}

export default Navbar