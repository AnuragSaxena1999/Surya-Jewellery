import React from 'react';


import FeatureBox from './FeatureBox'
import featureimage from "../images/locket.jpeg";
import featureimage1 from '../images/img2.jpg';
import featureimage3 from '../images/bracelet1.jpeg';
import featureimage2 from '../images/ring.jpeg';

import About from "./About";

import aboutimage1 from '../images/bride.png';
import Feature from './Feature';
import { NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function Home1() {
  return (
    <>

      <div id='main'>

        <div className="name">
          {/* <h1><span>SURYA JEWELLERS</span><br/>FIND YOUR UNIQUE STYLE</h1>*/}
          <h2 className='span display-7 fw-bolder ' style={{color:"#E73895"}}>SURYA JEWELLERS</h2>
          
          <h1 className='tagline'  style={{color:"white"}}>FIND YOUR UNIQUE STYLE</h1>
          <p className='details '  style={{color:"#ffd700"}}>"Shine bright like a diamond - Shop our stunning jewelry pieces now."</p>
          <Link to='/products' className='cv-btn'>Explore Us</Link>
        </div>
      </div>

      
       
      
      <Feature />

      <div className="container">
        <h1 className="display-5 fw-bolder text-center" style={{color:"#E73895"}}>Latest Products</h1>
        <hr />
      </div>


      

      <div id='features '>
        <div className="a-container">
          <Link to="/products/18"><FeatureBox image={featureimage} title='Locket' price='Rs. 1234'/></Link>
            
            
          <Link to="/products/2"><FeatureBox image={featureimage1} title="Men's Chain"  price='Rs.1999' /></Link>
          <Link to="/products/19"><FeatureBox image={featureimage3} title='Bracelet'  price='Rs.1999'  /></Link>
          <Link to="/products/17"><FeatureBox image={featureimage2} title="Men's Ring"  price='Rs.1999'  /></Link>

        </div>
        </div>
        <div className='text-center my-4 '>
            <Link
              to='/products'
              class="btn btn-outline-dark vertical-center btn-lg">More Products..
            </Link>
          </div>
        <About image={aboutimage1} title='Welcome to our stunning collection of exquisite jewellery!' button='Shop Now' />

      </>
      )
};
      export default Home1;
