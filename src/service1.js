import React from "react";

import Card from './Card';
import Pricing from './Pricing';
import waiting from './images/waiting.jpg';
import { NavLink } from "react-router-dom";

const Service1 = () => {
    return (
        <>
            <div id="" className="" >
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="mt-5 text-center text-dark"><strong>Our Services</strong></h1>
                        <p className="mt-3 text-center text-muted">With our web design services, you can be
                            assured that your web page will be one <br />of a kind.</p>
                        <p className=" text-center text-muted">Whether you’re looking to
                            start a blog or an e-commerce shop, we’ll craft a site <br />that does you justice – all for a competitive price.</p>
                    </div>
                </div>

                <div className="container-fluid bg-info">
                    <div className="row">
                        <div className="col-10 col-lg-8 mx-auto">
                            <div className="row gy-4">
                                <Card />
                            </div>

                        </div>
                    </div>
                </div>



                <div className="container-fluid   ">
                    <div className="row">
                        <div className="row gy-4">
                            <Pricing />
                        </div>
                    </div>
                </div>

                <div className="container-fluid mb-5   ">
                    <div className="row mb-5">
                        <div className="row gy-4 imgh">
                            <div className="text-center mx-auto my-auto ">
                               <h1 className="text-light  ">Ready to Make Your Idea Come to Life?</h1>
                               <h3 className="text-muted  r text-capitalize">Bazigar Tech will always with you </h3>
                                 <div className="d-inline-flex my-4 mx-auto flex flex-lg-shrink-1">
                                   <NavLink to="/contact" className="btn btn-primary text-light btn-lg">GET A FREE QUOTE >></NavLink>
                                   <NavLink to="/about" className="btn btn-outline-primary  btn-lg">ABOUT US >></NavLink>
                                   </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}
export default Service1;