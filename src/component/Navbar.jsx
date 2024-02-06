import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    //const length = state.length;
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">SURYA JEWELLERS</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto   fw-bold">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item fw-bold">
                                <NavLink className="nav-link " to="/products">Store</NavLink>
                            </li>
                            <li className="nav-item fw-bold">
                                <NavLink className="nav-link " to="/aboutus">About</NavLink>
                            </li>

                        </ul>
                        {/*<div className="buttons">
                            <a href="https://wa.me/7678339856" target="_blank" className="btn btn-outline-dark px-4 py-2 fa fa-whatsapp">
                                <i className=" me-1"></i>Whatsapp</a>
                            <a href='#' class='whatsapp fab fa-whatsapp-square' id='sc' target='_blank'>
                                <i class=" bi bi-whatsapp"></i>
                            </a>
                            <a href='tel:767-833-9856' target="_blank" className="btn btn-outline-dark px-4 py-2 ms-2 fa fa-phone">
                                <i className=" me-1"></i>Call</a>
                            <a href="https://www.instagram.com/surya__jeweller" target="_blank" className="btn btn-outline-dark px-4 py-2 ms-2  fa fa-instagram">
                                <i className=" me-1"></i>Instagram</a>

    </div>*/}
    
    <Button href="https://wa.me/7678339856" target="_blank" className='btn-outline-dark px-4 m-2 py-2 fa fa-whatsapp'></Button> 
                        <Button href="tel:767-833-9856" target="_blank" className='btn-outline-dark px-4 m-2 py-2 fa fa-phone'></Button> 
                        <Button href="https://www.instagram.com/surya__jeweller" target="_blank" className='btn-outline-dark px-4 m-2 py-2 fa fa-instagram'></Button> 
                       
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;