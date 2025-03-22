import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import circles from '../assets/imges/circles.jpg';
import olive from '../assets/imges/olive.jpg';
import pearles from '../assets/imges/pearles.jpg'
const Customerfavorite = () => {
    return (
        <>
            <div className="container-fulid cust-bg-img" style={{ marginTop: "60px" }}>
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="text-center ">
                        <h1 className="fs-1 text-white  display-5 category">CUSTOMMER FAVORITES</h1>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-6" style={{ marginBottom: "70px" }}>
                                    <Card >
                                        <div className='d-flex  my-3 align-item-center justify-content-center'>
                                            <div className='ms-3 d-flex align-item-center justify-content-center '>
                                                <div>
                                                    <i class="fa-duotone fa-solid fa-star star-color" style={{ fontSize: "15px" }}></i>
                                                </div>
                                                <div className='align-item-center justify-content-center'>
                                                    <p style={{ fontSize: "11px" }} className='ms-2 mt-1'>4.2 RATE</p>
                                                </div>

                                            </div>
                                            <div className='ms-auto me-2 '>
                                                <button style={{ letterSpacing: "3px", fontSize: "10px" }} className='btn border  border-dark rounded-pill '>NECKLACES</button>
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={circles} />
                                        <div className='mb-3'>
                                            <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)" }}>$ 1.125 <br /> <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)", letterSpacing: "5px", fontSize: "13px" }}>  CIRCLES PENDANT</p></p>

                                        </div>
                                    </Card>
                                </div>
                                <div className="col-md-4 col-sm-6 col-6">
                                    <Card >
                                        <div className='d-flex  my-3 align-item-center justify-content-center'>
                                            <div className='ms-3 d-flex align-item-center justify-content-center '>
                                                <div>
                                                    <i class="fa-duotone fa-solid fa-star star-color" style={{ fontSize: "15px" }}></i>
                                                </div>
                                                <div className='align-item-center justify-content-center'>
                                                    <p style={{ fontSize: "11px" }} className='ms-2 mt-1'>4.7 RATE</p>
                                                </div>

                                            </div>
                                            <div className='ms-auto me-2 '>
                                                <button style={{ letterSpacing: "3px", fontSize: "10px" }} className='btn border  border-dark rounded-pill '>NECKLACES</button>
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={olive} />
                                        <div className='mb-3'>
                                            <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)" }}>$ 1.075 <br /> <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)", letterSpacing: "5px", fontSize: "13px" }}>  OLIVE LEFT  PENDANT</p></p>

                                        </div>
                                    </Card>
                                </div>
                                <div className="col-md-4 col-sm-3 col-12 d-none d-md-block d-lg-block d-sm-none">
                                    <Card > 
                                        <div className='d-flex  my-3 align-item-center justify-content-center'>
                                            <div className='ms-3 d-flex align-item-center justify-content-center '>
                                                <div>
                                                    <i class="fa-duotone fa-solid fa-star star-color" style={{ fontSize: "15px" }}></i>
                                                </div>
                                                <div className='align-item-center justify-content-center'>
                                                    <p style={{ fontSize: "11px" }} className='ms-2 mt-1'>4.5 RATE</p>
                                                </div>
                                            </div>
                                            <div className='ms-auto me-2 '>
                                                <button style={{ letterSpacing: "3px", fontSize: "10px" }} className='btn border  border-dark rounded-pill '>EARRINGS</button>
                                            </div>
                                        </div>
                                        <Card.Img variant="top" src={pearles} />
                                        <div className='mb-3'>
                                            <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)" }}>$ 725 <br /> <p className='text-center mt-3' style={{ color: "rgb(243, 185, 98)", letterSpacing: "5px", fontSize: "13px" }}>  PEARLS BY THE  YARD</p></p>
                                        </div>
                                    </Card>

                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Customerfavorite