import React from 'react'
import '../Components/CSS/Body4_2.css'


function Body4_2(props) {
    return (
        <>


                <div className="card">
                    <img src={props.imggg} alt="img1" className='images'/>
                    <div className="title">
                        <b><p className='tit'>{props.pickMeal}</p></b>
                        <p className='description'>{props.desMeal}</p>
                    </div>
                </div>

            
        </>
    )
}

export default Body4_2