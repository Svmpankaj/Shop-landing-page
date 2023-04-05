import React from 'react'

function FirstBody() {
    return (
        <div>
            {/* first dection starts here  */}
            <div className="container mt-5" id="home" style={{ height: "80%" }}>
                <div className="row">
                    <div className="col-md-8">
                        <h1 className="font-style mt-4" style={{ fontSize: "38px", fontWeight: "700px", color: "rgb(112, 131, 89)" }}>SHREE LAKSHMI <br />CATERERS</h1>
                        <h2>Your Event, Our Solution!</h2>
                        <p className="mt-5" style={{ width: "70%" }}>We know that the most important thing for you is to deliver amazing dining experiences
                            to your guests. We have experience in delivering tailored solutions that provide exceptional food
                            and service for every occasion.</p>
                    </div>
                    <div className="col-md-4 mt-3">
                        <img src="./images/img-1.png" width="100%" alt="img" />
                    </div>
                </div>
            </div>
            {/* first dection endss here  */}

            {/* second section starts here  */}

            {/* <div className="container mt-5" id="services">
                <h1> <span className="border-bottom border-success">S</span>ervices</h1>

            </div> */}
        </div>
    )
}

export default FirstBody
