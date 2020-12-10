import React from "react";
 
import ios from "./images/ios.jpg"
import {NavLink} from "react-router-dom";
const Website = () => {
    return (
        <>
             
            <div className="container-fluid mb-5">
                <div className="mx-5 my-5">
                    <h3 className="ml-5 text-muted">Website Development</h3>
                </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={ios} height="262px" width="200px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Static Website</strong></h5>
                                        <p class="card-text">We have great Static Website development team.</p>
                                        <p><strong>Rs-40000</strong></p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={ios} height="262px" width="200px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Dynamic Website</strong></h5>
                                        <p class="card-text">We have great Dynamic Website development team.</p>
                                        <p><strong>Rs-40000</strong></p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-10 mx-auto">
                                <div class="card">
                                    <img src={ios} height="262px" width="200px" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title"><strong>Ecommerce Website</strong></h5>
                                        <p class="card-text">We have great Ecommerce development team.</p>
                                        <p><strong>Rs-150000</strong></p>
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
export default Website;