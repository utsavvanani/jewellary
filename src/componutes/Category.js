import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nacklaces from "../assets/imges/nacklaces.jpg";
import rings from "../assets/imges/rings.jpg";
import earinges from "../assets/imges/earinges.jpg";
import breclet from "../assets/imges/breclet.jpg";

const Category = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const img = [{
        id: 1,
        name: "nacklaces",
        url: nacklaces,

    },
    {
        id: 2,
        name: "rings",
        url: rings,

    },
    {
        id: 3,
        name: "earinges",
        url: earinges,

    },
    {
        id: 4,
        name: "breclet",
        url: breclet,

    },
    ]
    return (
        <>
            <div className="container-fulid" style={{ marginTop: "70px" }}>
                <div className="text-center">
                    <h1 className="fs-1 display-5 category">TOP CATEGORIES</h1>
                </div>
                <div className="row">

                    {
                        img.map((item, index) => {
                            return (
                                <div className='col-sm-6 col-md-6 col-lg-3 col-6'>
                                    <div >
                                        <div className='postion1'>
                                            <img src={item.url} height={"500px"} width={"100%"} alt={item.name} />
                                        </div>
                                        <h2 className="fs-4 display-6  postion-2">{item.name}</h2>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Category