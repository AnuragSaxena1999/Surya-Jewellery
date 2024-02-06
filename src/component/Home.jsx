import React from 'react'
import Products from './Products';
import Newsletter from './Newsletter';
import { NavLink } from 'react-router-dom';




const Home = () => {
  return (
    <div className="hero  ">

      {/*<div className="card bg-dark text-white border-0 ">
        <img src="/assets/bg1.png" className="card-img img-thumbnail  " alt="Background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h6 className="card-title fs-5 fw-bolder  mb-0 responsive-font-example ">SURYA JEWELLERS</h6>
            <h1 className="card-text lead fs-4 fw-bolder mb-0 responsive-font-example">FIND YOUR UNIQUE STYLE</h1>
            <NavLink
              to='/products'
              class="btn btn-outline-light btn-warning text-black responsive-font-example fs-25 "
            >
              Explore Us
            </NavLink>
          </div>

        </div>
      </div>*/}


      <div>
        <div className="container my-5 py-1 ">
          <div className="row">
            <div className="col-12 mb-5">
              <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
              <hr />
            </div>
          </div>

          <div class="row">
            <div class="col-md-3 mb-4" >
              <div class="card h-100 text-center p-4" >
                <img src="/assets/img1.jpg" class="card-img-top img-fluid" alt="/" height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">Fjallraven -...</h5>

                  <p class="card-text lead fw-bold">$1234</p>
                  <NavLink
                    to='/products/1'
                    class="btn btn-outline-dark "
                  >
                    Buy Now
                  </NavLink>

                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card h-100 text-center p-4">
                <img src="/assets/img2.jpg" class="card-img-top img-fluid" alt="/" height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">Fjallraven -...</h5>

                  <p class="card-text lead fw-bold">$1234</p>
                  <NavLink
                    to='/products/2'
                    class="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>

                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card h-100 text-center p-4">
                <img src="/assets/img3.jpg" class="card-img-top img-fluid" alt="/" height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">Fjallraven -...</h5>

                  <p class="card-text lead fw-bold">$1234</p>
                  <NavLink
                    to='/products/3'
                    class="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>

                </div>
              </div>
            </div>
            <div class="col-md-3 mb-4">
              <div class="card h-100 text-center p-4">
                <img src="/assets/img4.jpg" class="card-img-top img-fluid" alt="/" height="250px" />
                <div class="card-body">
                  <h5 class="card-title mb-0">Fjallraven -...</h5>

                  <p class="card-text lead fw-bold">$1234</p>
                  <NavLink
                    to='/products/4'
                    class="btn btn-outline-dark"
                  >
                    Buy Now
                  </NavLink>

                </div>
              </div>
            </div>


          </div>
          <div className='text-center '>
            <NavLink
              to='/products'
              class="btn btn-outline-dark vertical-center btn-lg">More Products..
            </NavLink>
          </div></div>

      </div>
      <div className='newsletter py-3 '>
        <Newsletter />
      </div>

    </div>

  );
}
export default Home;