import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function About(props) {
    return (
        < div id='about'>
            <div className='about-image '>
                <img src={props.image}  alt="" />
            </div>
            <div className="about-text">
                <h4 style={{color:"#E73895"}} >{props.title}</h4>
                <p style={{fontWeight:"bold"}}>Our pieces are crafted with the finest materials and designed to captivate the senses.Whether you're looking for a special gift for a loved one or a treat for yourself, our collection is sure to impress!</p>
                <Link to="/products" className='cv-btn'>{props.button}</Link>
            </div>
        </div>
    )
};
export default About;
