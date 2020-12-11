
import React from "react";
import about from './images/about.png';

const About1 = () => {
    return (

        <>
            <div className="row">
                <div className="col-md-10 col-12 mx-auto">
                    <div className="row d-flex mx-auto p-5 justify-content-center">
                        <div data-aos-duration="2000" data-aos="fade-right" className="mt-lg-5 d-flex flex-column col-md-6 col-6 order-lg-1 order-2 mx-auto">
                            <h6 className="text-primary mt-5 mb-5">ABOUT ME</h6>
                            <h1 className="text-dark"><strong>Hello! I’m Bazigar Tech. I’ve Been Building Websites</strong></h1>
                            <h5 className="mt-3 text-muted">When you’re looking to hire a web designer, the last thing that you want is a website that looks
                            like it’s straight out of a seminar on Web 2.0 or, worse yet, something you could have made back
                            in the Geo cities era. Our designers have kept up with the latest trends in web design and can build
                            you a state of the art website from scratch. We can also base the build off of one of the many popular
                            CMS offerings available today – a popular option for people looking to be a bit more proactive with their
                                pages.</h5>
                        </div>
                        <div data-aos-duration="2000" data-aos="fade-left" className="col-lg-6 mt-5 order-3 mx-auto d-flex justify-content-center order-lg-1 header-img">
                            <img src={about} alt="about" />
                        </div>
                    </div>
                </div>
                <div className=" col-md-10 col-12 mx-auto ">
                    <div className="row d-flex mx-auto mb-5">
                        <div className="col-md-6 px-5">

                            <h4 className="px">WEB DEVELOPMENT</h4>
                            <div class="progress mb-3">
                                <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>



                            <h4 className="px">SOFTWARE DEVELOPMENT</h4>
                            <div class="progress mb-3">
                                <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>


                            </div>
                             
                                <h4 className="px">DIGIGTAL MARKETING</h4>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About1;