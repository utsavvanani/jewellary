import React from 'react'
import heading from "../assets/icone/heading.png";
const Footers = () => {
    return (
        <>
            <div className="container-fulid" style={{
                marginTop: "30px", backgroundColor: " rgb(90, 72, 46) ", marginBottom: "4   0px"
            }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row ">
                                <div className=" col-md-6  my-5">
                                    <div>
                                        <img src={heading} height={"35px"} className='text-light' alt="" />
                                    </div>
                                    <p style={{ fontSize: "15px" }} className='text-light mt-3'>GROWN WITH LOVE ,WARN WITH </p>
                                </div>
                                <div className="col-md-6 " >
                                    <div className='mx-3'>
                                        <div className='mt-5'>
                                            <p className='text-light'>COMPANY</p>
                                        </div>
                                        <ul className='nav '>
                                            <li className='nav-item'><a href="" className='nav-link text-light '>About us </a></li>
                                            <li className='nav-item'><a href="" className='nav-link text-light '>Why we are different </a></li>
                                            <li className='nav-item'><a href="" className='nav-link text-light '>Leb grown  diamond  </a></li ><br />

                                            <li className='nav-item'><a href="" className='nav-link text-light '>Over Purpose </a></li>
                                            <li className='nav-item'><a href="" className='nav-link text-light '>story glimpase </a></li>
                                        </ul>
                                        <ul className='nav mb-5'>
                                            <li className='nav-item'><a href="" className='nav-link text-light'>Why us </a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="row" >
                                <div className="col-md-4">
                                    <div className='mt-5'>
                                        <p className='text-light'>ENGAGE</p>
                                    </div>
                                    <ul className='nav '>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Support </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Contect us </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Chat now </a></li ><br />

                                        <li className='nav-item'><a href="" className='nav-link text-light '>Track your order </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Review </a></li>
                                    </ul>
                                    <ul className='nav '>
                                        <li className='nav-item'><a href="" className='nav-link text-light'>Special and promo </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light'>FAq </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className='mt-5'>
                                        <p className='text-light'>SERVICES</p>
                                    </div>
                                    <ul className='nav '>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Free Shipping </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>7 Day Return </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Low Price  </a></li ><br />

                                        <li className='nav-item'><a href="" className='nav-link text-light '>Lifetime Warranty </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Order Status </a></li>
                                    </ul>
                                    <ul className='nav mb-5'>
                                        <li className='nav-item'><a href="" className='nav-link text-light'>Concellations </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light'>certifiction </a></li>
                                        <li className='nav-item'><a href="" className='nav-link text-light'>Buyback </a></li>
                                    </ul>
                                </div>
                                <div className="col-md-4">
                                    <div className='mt-5'>
                                        <p className='text-light'>CONTECCT</p>
                                    </div>
                                    <ul className='nav '>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Phone </a></li>
                                    </ul>

                                    <ul className='nav '>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Email </a></li>
                                    </ul>
                                    <ul className='nav'>
                                        <li className='nav-item'><a href="" className='nav-link text-light '>Book Appoinment  </a></li ><br />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <div className="mb-4">
                                        <div className=''>
                                        <h4 className='text-light'>OUR NEWSELLER</h4>
                                            <input type="text" placeholder='Email Address' name="" id="" className='mx-1 mt-2 px-4 py-1  rounded-pill ' />
                                            <button type="submit" className="btn text-light px-4 border-light rounded-pill">sending</button>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className='mb-5'>
                                    <h4 className='text-light'>FOLLOW US</h4>
                                    <div className="d-flex mt-4">
                                        <i className="fa-brands fa-facebook mx-3 text-light fs-4" ></i>
                                        <i className="fa-brands fa-instagram mx-3 text-light fs-4"></i>
                                        <i className="fa-brands fa-linkedin mx-3 text-light fs-4"></i>
                                        <i className="fa-brands fa-twitter mx-3 text-light fs-4"></i>
                                        <i className="fa-brands fa-youtube mx-3 text-light fs-4"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        

        </>
    )
}

export default Footers