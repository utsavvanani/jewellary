import React from 'react';
import frist from "../assets/imges/frist.jpg";
import second from "../assets/imges/second.jpg";
import third from "../assets/imges/third.jpg";
import four from "../assets/imges/four.jpg";
import fifth from "../assets/imges/fifth.jpg";
import six from "../assets/imges/six.jpg";

const Shop = () => {
    return (
        <>
            <div className="container-fluid" style={{ marginTop: "70px" }}>
                <div className="text-center">
                    <p className="fs-1 display-5 category">SHOP BY STYLE</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <img src={frist} className="img-fluid" alt="asscher" />
                            <p className='dimand'>Asscher</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <img src={second} className="img-fluid" alt="cushion" />
                            <p className='dimand'>Asscher</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 d-none d-sm-none  d-lg-block">
                            <img src={third} className="img-fluid" alt="emerald" />
                            <p className='dimand'>Asscher</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 d-none d-sm-none  d-lg-block">
                            <img src={four} className="img-fluid" alt="heart" />
                            <p className='dimand'>Asscher</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3">
                            <img src={fifth} className="img-fluid" alt="marquise" />
                            <p className='dimand'>Asscher</p>
                        </div>
                        <div className="col-6 col-sm-6 col-md-4 col-lg-2 mb-3 d-none d-sm-none  d-lg-block">
                            <img src={six} className="img-fluid" alt="oval" />
                            <p className='dimand'>Asscher</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;