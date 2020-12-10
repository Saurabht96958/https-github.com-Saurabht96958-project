import React from "react";

import web1 from './images/happy.png';
import web6 from './images/successfull.png';
import web7 from './images/soft2.jpg';
import CountUp from 'react-countup';
import { NavLink } from "react-router-dom";


const About2 = () => {
    return (
        <>
           
                <div className="col-md-4  col-10  ">
                    <div data-aos-duration="2000" data-aos="fade-left" className="card tr " style={{ width: "18rem" }}>
                        <img src={web1} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h1 className="text-dark text-center"><strong><CountUp end={200} duration={2} />+</strong></h1>
                            <h3 className="card-title text-center"><strong>Happy Customer</strong></h3>

                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-10  ">
                    <div data-aos-duration="2000" data-aos="fade-up" className="card tr" style={{ width: "18rem" }}>
                        <img src={web6} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column justify-content-center">
                            <h1 className="text-dark text-center"><strong><CountUp end={200} duration={2} />+</strong></h1>
                            <h3 className="card-title text-center"><strong>Sucessfull Project</strong></h3>

                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-10" style={{ width: "18rem" }}>
                    <div data-aos-duration="2000" data-aos="fade-right" className="tr card">
                        <img src={web7} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h1 className="text-dark text-center"><strong><CountUp end={50} duration={2} />+</strong></h1>
                            <h3 className="card-title text-center mt-1"><strong>Empployees</strong></h3>


                        </div>
                    </div>
                </div>
           
        </>
    );
}

export default About2;