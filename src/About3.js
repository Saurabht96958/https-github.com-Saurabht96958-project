import React from "react";
import { NavLink } from "react-router-dom";
import fast from "./images/svg-5.svg"
 

const About3 = () => {
    return (
        <>
            <div id="header" className="  align-items-center" >
                <div className="container-expand">

                    <div className="row bg-dark ">
                        <div className="col-10 my-5 mx-auto">
                            <div className="container">
                                <div className="row">

                                    <div data-aos-duration="2000" data-aos="fade-left" className="col-lg-6 order-2 order-lg-1 header-img ">
                                        <div className=" mt-5 bg-dark bg-transparent p-5">

                                            <img src={fast} alt="homelogo" className="animated img-fluid" />

                                        </div>
                                    </div>

                                    <div data-aos-duration="2000" data-aos="fade-right" className="col-md-6 mt-5 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                        <p className="text-danger"><strong>100% SECURE</strong></p>
                                        <h1 className="text-light">Stay connected 24/7 with <strong className="brand-name">Bazigar Tech
                                        </strong></h1>
                                        <h5 className="my-3 text-light">We have you covered no matter where you are located.</h5>
                                        <h1 className="text-light">Extra Insurance Website Redesign</h1>
                                        <h5 className="my-3 text-light"></h5>
                                        <div className="mt-3">
                                            <NavLink to="contact" className="btn-get-started">Get Started</NavLink>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}



export default About3;