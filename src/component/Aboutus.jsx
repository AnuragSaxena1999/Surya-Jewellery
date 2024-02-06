import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import aboutImage from '../images/aboutus.jpg';

const AboutUs = () => {
  return (
    <div className="about-us " style={{marginTop:"70px" , marginBottom:"20px"}}>
      <Container>
        <Row>
          <Col md={6}>
            <img src={aboutImage} alt="About Us" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2 style={{color:"#E73895"}} >About Our Company</h2>
            <hr />
            <p>At <b style={{color:"#E73895"}} >Surya Jewellers</b> , we're committed to providing our customers with the best shopping experience possible. Whether you're looking for the latest fashion trends, electronics, or home goods, we have something for everyone.</p>
            <p>Our mission is to make online shopping simple, convenient, and affordable for everyone. We believe that every customer deserves the best quality products at the most affordable prices, and we work tirelessly to bring you the latest and greatest products from around the world.</p>
            
            <p>If you have any questions, comments, or concerns, please don't hesitate to contact us. Our friendly customer support team is always here to help you with anything you need.</p>
            <div >
            <h4 style={{color:"#E73895"}}>Facilities we provide you</h4>
            <hr />
            <ul className='fs-5'>
                <li> <b>1. FREE Shipping all across India</b> </li>
               
                <li><b>2. Our products will be delivered at your doorstep.</b></li>
                <li><b>3. Product will be deliver in 4-5 working days.</b></li>
                <li><b>4. We give you the best quality products.</b></li>
                <li><b>5. 100% safe and secure payments.</b></li>
                <li><b>6. You can book your order by doing just Call or Whatsapp.</b> </li>
            </ul>
          </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;
