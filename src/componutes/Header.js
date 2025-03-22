import React from "react";
import heading from "../assets/icone/heading.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    return (
        <>
            {/* Desktop Header */}
            <div className="container-fluid hero-img">
                <div className="justify-content-between align-items-center">
                    <div className="container">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="mt-4 d-none d-md-block text-light text-lg-center">
                                <p>CONTECT</p>
                            </div>

                            {/* Logo on the left */}
                            <div className="mt-3 ms-md-5 ms-sm-0  text-md-center text-sm-start">
                                <img src={heading} className="w-75" alt="Heading" />
                            </div>

                            <div className="d-none d-sm-none d-md-block mt-4 text-center">
                                <i className="fa-solid fa-magnifying-glass mx-3 text-white"></i>
                                <i className="fa-regular fa-heart mx-3 text-white"></i>
                                <i className="fa-regular fa-user mx-3 text-white"></i>
                                <i className="fa-solid fa-cart-plus mx-3 text-white"></i>
                                <i className="fa-solid fa-envelope mx-3 text-white"></i> {/* Contact icon */}
                            </div>
                        </div>
                    </div>

                    {/* Navbar */}
                    <Navbar expand="lg" className="mt-3">

                        <Container>
                            <Navbar.Collapse id="navbarScroll">
                                <Nav className="m-auto" style={{ maxHeight: '100vh' }}>
                                    <Nav.Link href="#" className="text-light navhover mx-3">ENGAGEMENT</Nav.Link>
                                    <Nav.Link href="#" className="text-light navhover mx-3">WEDDING</Nav.Link>
                                    <Nav.Link href="#" className="text-light navhover mx-3">FINE JEWELRY</Nav.Link>
                                    <Nav.Link href="#" className="text-light navhover mx-3">CUSTOMS</Nav.Link>
                                    <Nav.Link href="#" className="text-light navhover mx-3">ABOUT</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <hr className="container-fluid bg-light h-25" />

                {/* Hero Section */}
                <div className="container margin-160">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-light header-letter-spacing">DISCOVER A <br /> BEST OF BEST</p>
                            <p className="text-light fonts">INSPIRED BY OUR LIFE</p>
                            <button className="btn text-black bg-light py-2 px-3 letter-spacing" style={{ marginBottom: "100px" }}>
                                EXPLORE BESTSELLERS
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Fixed Bottom Icons */}
            <div className="d-block d-md-none fixed-bottom bg-dark py-2 text-center">
                <i className="fa-solid fa-magnifying-glass mx-4 mx-md-5 text-white"></i>
                <i className="fa-regular fa-heart mx-4 mx-md-5  text-white"></i>
                <i className="fa-regular fa-user mx-4 mx-md-5  text-white"></i>
                <i className="fa-solid fa-cart-plus mx-4 mx-md-5  text-white"></i>
                <i className="fa-solid fa-envelope mx-4  mx-md-5 text-white"></i> {/* Contact icon */}
            </div>
        </>
    );
};

export default Header;