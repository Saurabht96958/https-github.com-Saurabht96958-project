import React from "react";

import con from './images/contact.png';

const Contact = () => {
    return (
        <>
            <div id="header" className="  align-items-center" >
                <div className="container-expand">
                    <div className="row" style={{ backgroundColor: "#161922" }}>
                        <div className="col-10 my-5 mx-auto">
                            <div className="container">
                                <div className="row">
                                    <div data-aos="fade-right" className="col-md-6 mt-5 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                        <h1 className="text-light">Need a Quote? Have a General Question? Get in Touch with <strong className="brand-name">Bazigar Tech
                                    </strong></h1>
                                        <h2 className="my-3 text-light">We are the team of best developers</h2>
                                        <div className="mt-3">

                                        </div>
                                    </div>
                                    <div data-aos="fade-left" className="col-lg-6 order-1 order-lg-2 header-img ">
                                        <div className=" mt-5 bg-dark bg-transparent p-5">

                                            <img src={con} alt="homelogo" className="animated img-fluid" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                    <div className="row " style={{ backgroundColor: "#161922" }}>
                        <div className="col-10 my-5 mx-auto">
                            <div className="container mx-auto">
                                <div className="row">
                                    <h3 className="mx-auto text-center mb-5 text-light">Send a message or call!</h3>
                                    <div className="col-md-8  mx-auto">
                                        <div className="row  ">
                                            <div data-aos-duration="2000" data-aos="zoom-in-up" className="col-md-6 px-5 mx-auto my-auto align-items-center d-flex flex-column">
                                                 <h1><strong className="text-center text-light">Email</strong></h1>
                                                <h5 className="my-3 text-light"><strong>Contact@Bazigar.Tech</strong></h5>
                                            </div>

                                            <div data-aos-duration="2000" data-aos="zoom-in-up" className="col-md-6 px-5 mx-auto my-auto align-items-center d-flex flex-column">
                                                 <h1><strong className="text-center text-light">Phone</strong></h1>
                                                <h5 className="my-3 text-light"><strong>+918923549148</strong></h5>
                                            </div>
                                          </div>   
                                    </div>
                                    <h3 className="mx-auto text-center mt-5 text-light">24/7 Experts Availability, You can contact at any time.</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
export default Contact;