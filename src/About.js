
import React from "react";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
 

const About = () => {
    return (
        <>
            <div className="container-fluid">
                <About1 />
                 
                <div className="container-expand  " style={{backgroundColor:"#161922"}} >
                    <div className="row my-4">
                        <div className="col-8 mx-auto">
                            <div className="row my-auto mb-3 mt-3 gy-2">
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