import React from "react";
import { NavLink } from "react-router-dom";
import fast from "./images/svg-7.svg"

import B from "./images/b.png";

const Home = () => {
    return (
        <>
            <div id="header" className="  align-items-center" >
                <div className="container-expand-sm">
                    <div className="row" style={{ backgroundColor: "#feceff1" }}>
                        <div className="col-md-10 mx-auto">
                            <div className="container mb-4">
                                <div className="row">
                                    <div data-aos-duration="2000" data-aos="fade-right" className="col-md-6 col-8 mt-5 text-center pl-5  pt-lg-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1 className="text-black"> Start your business with <strong className="brand-name">Bazigar Tech
                                        </strong></h1>
                                        <h2 className="my-3 text-black">We are the team of best developers</h2>
                                        <div className="mt-3 mb-3">
                                            <NavLink to="contact" className="btn-get-started">Get Started</NavLink>
                                        </div>
                                    </div>
                                    <div data-aos-duration="2000" data-aos="fade-left" className="col-lg-6 col-10 order-1 order-lg-2 header-img ">
                                        <div className=" mt-5 bg-dark bg-transparent p-3">
                                            <img src={B} alt="homelogo" className="animated img-fluid himg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="row " style={{ backgroundColor: "#161922" }}>
                        <div className="col-10 my-5 mx-auto">
                            <div className="container">
                                <div className="row">

                                    <div data-aos-duration="2000" data-aos="fade-left" className="col-lg-6 order-2 order-lg-1 header-img ">
                                        <div className=" mt-5 bg-dark bg-transparent p-5">

                                            <img src={fast} alt="homelogo" className="animated img-fluid" />

                                        </div>
                                    </div>

                                    <div data-aos-duration="2000" data-aos="fade-right" className="col-md-6 mt-5 pt-5 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                        <p className="text-danger">EASY SETUP</p>
                                        <h1 className="text-light">Super fast and simple process with <strong className="brand-name">Bazigar Tech
                                        </strong></h1>
                                        <h5 className="my-3 text-light">Get everything set up and ready in under required time.
                                            all you need to do is just contact and give the requirements. </h5>
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



export default Home;