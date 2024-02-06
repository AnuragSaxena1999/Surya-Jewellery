import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-light">
      <div className="container py-5 ">
        <div className="row ">
          <div className="col-md-4 ">
            <h4 style={{color:"#E73895"}}>Surya Jewellers</h4>
            <hr />
  
            <p className="text-muted ">"Discover the perfect piece that completes your outfit and reflects your personality."</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://wa.me/+918595666108?text=Hello%20Surya%20Jewellers%2C%20I%20want%20to%20purchase%20an%20Item." target="_blank">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="list-inline-item " >
                <a href="tel:859-566-6108" target="_blank">
                  <FaPhone />
                </a>
              </li>
              <li className="list-inline-item" >
                <a href="https://www.instagram.com/surya__jeweller" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h4 style={{color:"#E73895"}}>Useful Links</h4>
            <hr />
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Store</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
             
            </ul>
          </div>
          <div className="col-md-2">
            <h4 style={{color:"#E73895"}}>Contact Us</h4>
            <hr />

            <ul className="list-unstyled">
              <li><a href="tel:859-566-6108" target="_blank">859-566-6108</a></li>
              <li><a href="mailto:info@suryajewellery.in" target="_blank">info@suryajewellery.in</a></li>
              
            </ul>
          </div>
          <div className="col-md-4">
            <h4 style={{color:"#E73895"}}>Get Connected Us</h4>
            <hr />

            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="https://wa.me/+918595666108?text=Hello%20Surya%20Jewellers%2C%20I%20want%20to%20purchase%20an%20Item." target="_blank">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="tel:859-566-6108" target="_blank">
                  <FaPhone />
                </a>
              </li>


              <li className="list-inline-item ">
                <a href="https://www.instagram.com/surya__jeweller" target="_blank">
                  <FaInstagram />
                </a>
              </li>

              <li className="list-inline-item ">
                <a href="/" target="_blank">
                  <FaFacebook />
                </a>
              </li>
            </ul>
            <h3 style={{color:"#E73895"}}> Call Us at</h3>
            <hr />
            <ul className="list-unstyled ">
              <li><a href="tel:859-566-6108" target="_blank">859-566-6108</a></li>
              <li><a href="tel:807-669-6954" target="_blank">807-669-6954</a></li>
              

            </ul>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 text-center">
            <p className="text-muted">© {new Date().getFullYear()} Surya Jewellers. All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <div className="bottom-bar " >
        <div className="botton-bar-content"  >
          <div className="text text-center" >
            This Website is Created by <span style={{color:"#E73895"}}>Anurag Saxena</span> 


            <li className="list-inline-item">
              <a href="https://www.instagram.com/saxenaanurag133" target="_blank">
                <FaInstagram />
              </a>
            </li>
            <li className="list-inline-item" target="_blank">
              <a href="https://www.linkedin.com/in/anurag-saxena-7257001b1/" target="_blank">
                <FaLinkedin />
              </a>
            </li>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
