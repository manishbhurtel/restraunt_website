import React from 'react'
import '../Components/CSS/Body.css'
import bodyLOGO from '../Images/bodylogo.png'

function Body() {
  return (
    <>
      <div className="body_container">
        <div className="Blogo">
          <img src={bodyLOGO} alt="bodyLogo" />
        </div>

        <div className="body_para">
          <p className='bPara' > We Provide foods <br />
            that are </p>
        </div>

        <div className="body_button">
          <a href='#Body2_container'><button>See more</button></a>
        </div>
      </div>
    </>
  )
}

export default Body