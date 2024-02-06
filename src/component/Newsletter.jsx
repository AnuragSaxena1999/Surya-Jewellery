import React from 'react';
import { NavLink } from 'react-router-dom';
function Newsletter() {
  return (
    <div className="card bg-white text-black border-0 shadow-sm px-4 ">
                <img src="/assets/ban.jpg" className=" img-fluid " alt="Background" height="500px" />
                <div className="card-img-overlay">
                    <div className="container">
                      
                        <p className="card-text text-center text-white fw-bold fs-2  px-1 md-3 responsive-font-example ">Unique, affordable, local.<br />
                       <br />
                        <NavLink
                      to='/products'
                      class="btn btn-outline-light btn-warning text-black  "
                    >
                      Shop Now
                    </NavLink>
                    </p>
                    </div>
                    
                </div>
            </div>
          
  );
}

export default Newsletter;
