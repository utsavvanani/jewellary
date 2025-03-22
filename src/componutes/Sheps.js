import React from 'react'
import Slider from "react-slick";
import aascher from '../assets/imges/aascher.jpg';
import cushion from '../assets/imges/cushion.jpg';
import emerald from '../assets/imges/emerald.jpg';
import heart from '../assets/imges/heart.jpg';
import marquise from '../assets/imges/marquise.jpg';
import oval from '../assets/imges/oval.jpg';
import pear from '../assets/imges/pear.jpg';
const Sheps = () => {


    return (
        <>
            <div className="container-fulid">
                <div className="text-center">
                    <p className="fs-1 display-5 category">CURATED BY SHAPE</p>
                </div>
                <div className="container-fulid mx-3 d-none d-lg-block d-xxl-block">
                    <div className='d-flex'>
                        <div className="row ">
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={aascher} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>asscher</p>
                            </div>
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={cushion} width={"100%"} height={"100%"} alt="" />
                                </div>

                                <p className='dimand'>cushion</p>
                            </div>
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={emerald} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>emerald</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 ">
                                <div>
                                    <img src={heart} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>heart</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={marquise} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>marquise</p>
                            </div>
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={oval} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>oval</p>
                            </div>
                            <div className="col-sm-6 col-md-2 col-lg-4 ">
                                <div>
                                    <img src={oval} width={"100%"} height={"100%"} alt="" />
                                </div>
                                <p className='dimand'>oval</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container d-block d-lg-none d-xxl-none">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={aascher} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>asscher</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={cushion} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>cushion</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={emerald} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>emerald</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={heart} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>heart</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={oval} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>oval</p>
                    </div>
                    <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                        <div>
                            <img src={oval} width={"100%"} height={"100%"} alt="" />
                        </div>
                        <p className='dimand'>oval</p>
                    </div>
                </div>
            </div>
        </>
        // <div className="container-fulid">
        //     <div className="text-center">
        //         <p className="fs-1 display-5 category">CURATED BY SHAPE</p>
        //     </div>
        //     <div className="slider-container mx-5">

        //             <div className='d-none d-md-block d-sm-none ' >
        //                 <img src={aascher} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>asscher</p>
        //             </div>
        //             <div className='ms-3 '>
        //                 <img src={cushion} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>cushion</p>
        //             </div>
        //             <div className='ms-3'>
        //                 <img src={emerald} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>emerald</p>
        //             </div>
        //             <div className='ms-3'>
        //                 <div className='heart'>
        //                     <img src={heart} width={"100%"} height={"100%"} alt="" />
        //                     <p className='dimand'>heart</p>
        //                 </div>
        //             </div>
        //             <div className='ms-3 '>
        //                 <img src={marquise} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>marquise</p>
        //             </div>
        //             <div className='ms-3 '>
        //                 <img src={oval} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>oval</p>
        //             </div>
        //             <div className='d-none d-md-block d-sm-none ms-3 ms-sm-0'>
        //                 <img src={pear} width={"100%"} height={"100%"} alt="" />
        //                 <p className='dimand'>pear</p>
        //             </div>

        //     </div>
        // </div>
    )
}

export default Sheps