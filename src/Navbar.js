import React, {useState} from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
 
        return (
        <>
            <div data-aos="zoom-in" data-aos-duration="2000" className="container-fluid navbar">   
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light ">
                            <NavLink className="navbar-brand ml-4 " exact to="/"><img className="ml-6" src="/images/bazigar2.png" height="60" width="60" alt="BazigarTech" /><br /><img className="ml-0" src="/images/bazigar3.png" height="60" width="260" alt="BazigarTech" /></NavLink>

                            <button className="navbar-toggler bg-light" type="button"
                                data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                             

                            <div className="collapse navbar-collapse ml" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto ">
                                    <li className="nav-item active">
                                        <NavLink  className="nav-link text-light" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink  className="nav-link text-light" to="/service">Services <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink   className="nav-link text-light" to="/contact">Contact <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item active">
                                        <NavLink className="nav-link text-light" to="/about">About <span className="sr-only">(current)</span></NavLink>
                                    </li>

                                </ul>


                            </div>
                        </nav>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Navbar;
