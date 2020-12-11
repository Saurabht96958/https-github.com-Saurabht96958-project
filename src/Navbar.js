import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

const Navbar = () => {


    return (
        <>
            <div data-aos="zoom-in" data-aos-duration="2000" className="bg-dark">
                <div className="container">
                    <div className="container">
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">

                        <NavLink className="navbar-brand" to="/"><img className="d-flex ml-5 flex-column justify-content-center" src="/images/bazigar2.png" height="50" width="50" alt="BazigarTech" />
                            <img className="" src="/images/bazigar3.png" height="30" width="160" alt="BazigarTech" /></NavLink>


                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>


                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <ul className="navbar-nav text-center text-capitalize ml-auto">
                                <li className="nav-item active">
                                    <NavLink className="nav-link text-light" to="/"><strong>Home</strong> <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link text-light" to="/service"><strong>Services</strong> <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link text-light" to="/contact"><strong>Contact</strong> <span className="sr-only">(current)</span></NavLink>
                                </li>
                                <li className="nav-item active">
                                    <NavLink className="nav-link text-light" to="/about"><strong>About</strong> <span className="sr-only">(current)</span></NavLink>
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
