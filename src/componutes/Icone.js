import React from 'react'
import frist from "../assets/icone/first.png";
import second from "../assets/icone/second.png";
import third from "../assets/icone/third.png";
import four from "../assets/icone/fourth.png";
import fifth from "../assets/icone/fifth.png";
import six from "../assets/icone/six.png";
const Icone = () => {
    return (
        <>
            <div className="container-fluid" style={{ marginTop: "70px", marginBottom: "30px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb- text-center">
                            <img src={frist} className="img-fluid" alt="asscher" />
                            <p className='dimand mt-3 '>ELEGANT<br />PACKGING</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
                            <img src={second} className="img-fluid" alt="cushion" />
                            <p className='dimand mt-3'>COMPETITIVE <br /> PRICE
                            </p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
                            <img src={third} className="img-fluid" alt="emerald" />
                            <p className='dimand mt-3'>CONFLICK FREE <br /> DIMOND</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
                            <img src={four} className="img-fluid" alt="heart" />
                            <p className='dimand mt-3'>LIFETIME <br />WARRANTY</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
                            <img src={fifth} className="img-fluid" alt="marquise" />
                            <p className='dimand mt-3'>FREE SHIPPING</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 text-center">
                            <img src={six} className="img-fluid" alt="oval" />
                            <p className='dimand mt-3'>CERTIFICTIONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Icone