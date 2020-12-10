import React from 'react';

import { NavLink } from 'react-router-dom';

const Pricing = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="text-center text-dark"><strong>Pricing</strong></h1>
                    <p className="text-center text-muted">Our designers have kept up with the latest trends in web design and
                             can build you a state of the art website from scratch. </p>
                </div>
                <div className="row">

                    <div className="col-md-8 col-10 mx-auto">
                        <div className="row mb-4 mt-3 mx-auto">
                            <div className="col-10 mx-auto col-md-6 mt-5 mb-5 col-10 ">
                                <div data-aos-duration="2000" data-aos="fade-right" className="card border-primary mx-auto" style={{ width: "18rem;" }}>
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-dark mb-3"><strong >Website Develpment</strong></h2>
                                        <div className="text-center">
                                            <h5 className="mx-auto my-2 text-muted">Static Website<strong className="mx-2 text-primary">>></strong><strong className="mx-auto text-danger">  Rs-4000</strong> </h5>
                                            <h5 className="mx-auto my2 text-muted">Dynamic Website<strong className="mx-2 text-primary">>></strong><strong className="mx-auto text-danger text-right">  Rs-7000</strong> </h5>
                                            <h5 className="mx-auto my2 text-muted">Dynamic Website <strong className="mx-2 text-primary">>></strong><strong className="mx-auto text-danger text-right">  Rs-15000</strong> </h5>
                                            <NavLink to="/contact"><strong className="btn-primary btn">Get Started</strong></NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-10 mx-auto col-md-6 mt-5 mb-5 col-10 ">
                                <div data-aos-duration="2000" data-aos="fade-left" className="card border-primary mx-auto" style={{ width: "18rem;" }}>
                                    <div className="card-body">
                                        <h2 className="card-title text-center text-dark mb-3"><strong >Clone App Develpment</strong></h2>
                                        <div className="text-center">
                                            <h5 className="mx-auto my-2 text-muted">TikTok like app<strong className="mx-2 text-primary">>></strong> <strong className="mx-auto text-danger">  Rs-15000</strong> </h5>
                                            <h5 className="mx-auto my2 text-muted">Instagram clone app<strong className="mx-2 text-primary">>></strong><strong className="mx-auto text-danger text-right">  Rs-40000</strong> </h5>
                                            <h5 className="mx-auto my2 text-muted">Fb clone app<strong className="mx-2 text-primary">>></strong><strong className="mx-auto text-danger text-right">  Rs-40000</strong> </h5>
                                            <NavLink to="/contact"><strong className="btn-primary btn">Get Started</strong></NavLink>
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


export default Pricing;