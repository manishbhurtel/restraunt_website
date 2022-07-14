import React from 'react'
import '../Components/CSS/Body2.css'
import bImg from '../Images/plate.png'

function Body2() {
    return (
        <>
            <div id='Body2_container'>
                <img src={bImg} alt="body2img" className='body2img' />
                <div className="textarea_container">
                <div className="textarea">
                    <div className="b2header">
                       <b> Clean Process</b>
                    </div>
                    <div className="b2text">
                        We are living in the world where foods are creating values in the market and to fulfill the demands of the public, we make delicious food with maintaining cleanliness throughout the process.
                    </div>
                    <div className="body2_button">
                        <a href='#'><button>See more</button></a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Body2