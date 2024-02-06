import React , {useState} from 'react'
import Button from 'react-bootstrap/Button'

import { NavLink  } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom';
 function Navbar1() {
    const [nav , setnav] = useState(false);
    const changeBackground = ()=>{
        if(window.scrollY >= 50){
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll' , changeBackground);
  return (
    <nav className={nav ? 'nav active' : 'nav'} >
        <Link to="/" className='logo fw-bold fs-4' style={{color:"#E73895" , fontWeight:"bolder" , marginLeft:"22px"  }}>
            {/*<img src={logo} alt="" />*/}
            SURYA JEWELLERS 
            
        </Link>
        
        <input type='checkbox' className='menu-btn' id='menu-btn' />
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><Link to="/" className='fw-bold fs-6' >Home</Link></li>
            <li><Link to="/products" className='fw-bold fs-6'>Store</Link></li>
           
            <li><Link to="/aboutus" className='fw-bold fs-6'>About</Link></li>
            <li><Button id='whatsapp' href="https://wa.me/+918595666108?text=Hello%20Surya%20Jewellers%2C%20I%20want%20to%20purchase%20an%20Item." target="_blank" style={{marginTop:"15px" , marginRight:"8px"}} className=' fa fa-whatsapp'></Button></li>
            <li><Button id='phone' href="tel:859-566-6108" target="_blank" style={{marginTop:"15px", marginRight:"8px"}} className=' fa fa-phone'></Button></li>
            <li><Button id='instagram' href="https://www.instagram.com/surya__jeweller" target="_blank"  style={{marginTop:"15px", marginRight:"8px"}} className=' fa fa-instagram'></Button></li>
           {/*<li> <Button href="https://wa.me/+918595666108" target="_blank" className='btn-outline-white mx-2 fa fa-whatsapp ' style={{marginTop:"20px"   }} ></Button></li>
        <li><Button href="tel:859-566-6108" target="_blank" className='btn-outline-white mx-2   fa fa-phone' style={{marginTop:"20px"}}></Button></li>
  <li><Button href="https://www.instagram.com/surya__jeweller" target="_blank" className='btn-outline-white  mx-2  fa fa-instagram' style={{marginTop:"20px"}}></Button></li>*/} 
            
        </ul>
                     
    </nav>
  )
};
export default Navbar1;
