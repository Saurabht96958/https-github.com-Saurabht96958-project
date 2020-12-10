import React from "react";
import digital from "./images/digital.jpg"
import android from "./images/android.jpg"
import software from "./images/software.jpg"
import ios from "./images/ios.jpg"
import web from "./images/web.jpg";
import { NavLink } from "react-router-dom";
const Development = () => {
    return (
        <>

            <div className="container-fluid mb-5" style={{backgroundColor:"#FFD700"}}>
                <div className="mt">
                    <h1 className="text-center text-primary text-dark"><strong>Our Services</strong></h1>
                </div>
                <div className="mx-5 my-5">
                    <h3 className="ml-5 text-muted">App Development</h3>
                </div>
                <div className="row">

                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={software} height="262px" width="200px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Software Development</strong></h5>
                                        <p class="card-text">We have great softwere development team.</p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={android} height="260px" width="100px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Android Development</strong></h5>
                                        <p class="card-text">We have great Android development team.</p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={ios} height="260px" width="100px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>IOS Development</strong></h5>
                                        <p class="card-text">We have great IOS Development team.</p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-6">
                                <div class="card">
                                    <img src={web} height="260px" width="100px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Web Development</strong></h5>
                                        <p class="card-text">We have great Web Development team.</p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10">
                                <div class="card">
                                    <img src={digital} height="260px" width="100px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Digital Marketing</strong></h5>
                                        <p class="card-text">We have great Digital Marketing team.</p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
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
export default Development;