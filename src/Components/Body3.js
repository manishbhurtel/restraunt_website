import React from 'react'
import '../Components/CSS/Body3.css'
import varietyPIC from '../Images/page3pic.png'

function Body3() {
    return (
        <>
            <div id='Body3_container'>
                <div className="textarea2_container">
                    <div className="textarea2">
                        <div className="b2header2">
                            <b> Variety of Foods</b>
                        </div>
                        <div className="b2text2">
                            Our Restaurant provides lots of services for different foods. We are divided and so do our services. Our services also vary according to the foods that is to be served to our customers. We are ready to give all the detailed information regarding the products and foods that we make for you.
                        </div>
                        <div className="body3_button">
                            <a href='#'><button>Get Started</button></a>
                        </div>
                    </div>
                    </div>
                    <img src={varietyPIC} alt="body2img" className='body3img' />
                
            </div>
        </>
    )
}

export default Body3