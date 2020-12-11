
import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
 

const About = () => {
    return (
        <>
            <div className="">
                <About1 />
                 
                <div className="container-fluid bg-info">
                    <div className="row">
                        <div className="col-10 col-lg-8 mx-auto">
                            <div className="row gy-4">
                                <About2 />
                            </div>

                        </div>
                    </div>
                </div>
               
                <About3 />
            </div>
        </>
    );
}
export default About;