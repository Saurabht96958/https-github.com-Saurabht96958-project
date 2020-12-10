import React from "react";

import web1 from './images/web1.svg';
import web6 from './images/w6.png';
import web7 from './images/w7.png';

import { NavLink } from "react-router-dom";


const Card = () => {
    return (
        <>
            <div className="col-md-4 mt-5 mb-5 col-10  ">
                <div data-aos-duration="2000" data-aos="fade-left" className="card tr " style={{ width: "18rem" }}>
                    <img src={web1} className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-center"><strong>Web Development</strong></h5>
                        <p className="card-text text-center">Our experienced website developers and programmers hold
                                            years of knowledge and undertake bespoke projects of all size to deliver results and outcome you envision.</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mt-5 mb-5 col-10  ">
                <div data-aos-duration="2000" data-aos="fade-up" className="card tr" style={{ width: "18rem" }}>
                    <img src={web6} className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-center"><strong>Software Development</strong></h5>
                        <p className="card-text text-center">Our experienced website developers and programmers hold
                                            years of knowledge and undertake bespoke projects of all size to deliver results and outcome you envision.</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
                    </div>
                </div>
            </div>

            <div className="col-md-4 mt-5 mb-5 col-10" style={{ width: "18rem" }}>
                <div data-aos-duration="2000" data-aos="fade-right" className="tr card">
                    <img src={web7} className="card-img-top" alt="" />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title text-center mt-1"><strong>Digital Marketing</strong></h5>
                        <p className="card-text text-center">Our experienced website developers and programmers hold
                                            years of knowledge and undertake bespoke projects of all size to deliver results and outcome you envision.</p>
                        <NavLink to="/contact" className="btn btn-primary">Contact</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;