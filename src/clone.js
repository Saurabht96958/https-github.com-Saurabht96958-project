import React from "react";
import whatsapp from "./images/whatsapp.jpg";
import instagram from "./images/instagram.jpg";
import tiktok from "./images/tiktok.jpg";
import facebook from "./images/facebook.jpg";
import {NavLink} from "react-router-dom";

const Clone = () => {
    return (
        <>
           
            <div className="container-fluid mb-5 " >
                <div className="mx-5 my-5">
                    <h3 className="ml-5 text-muted">Clone App Development</h3>
                </div>
                <div className="row" style={{backgroundColor:"black"}}>

                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={whatsapp} height="262px" width="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Whatsapp Clone Development</strong></h5>
                                        <p className="card-text">We have great Whatsapp development team.</p>
                                        <p><strong>Rs-40000</strong></p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={facebook} height="262px" width="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Whatsapp Clone Development</strong></h5>
                                        <p className="card-text">We have great Whatsapp development team.</p>
                                        <p><strong>Rs40000</strong></p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={instagram} height="262px" width="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Whatsapp Clone Development</strong></h5>
                                        <p className="card-text">We have great Whatsapp development team.</p>
                                        <p><strong>40000</strong></p>
                                        <NavLink to="/contact" class="btn btn-primary">Get Started</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={tiktok} height="262px" width="200px" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title"><strong>Whatsapp Clone Development</strong></h5>
                                        <p className="card-text">We have great Whatsapp development team.</p>
                                        <p><strong>150000</strong></p>
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
export default Clone;