import React from 'react'
import vayog from '../assets/imges/overvyage.jpg'
const Voyage = () => {
    return (
        <div className="container" style={{ padding: "30px", marginTop: "50px" }}>
            <div className="row">
                <div className="col-md-6 col-sm-12 col-lg-6 mt-5">
                    <div>
                        <img src={vayog} height={"500px"} width={"100%"} alt="" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 mt-5" >
                    <div className='mt-5 '>
                        <p className='vayage ms-3 '>our vayage</p>
                        <p className='font-lorem fs-6 ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum alias tempora! Sint omnis unde adipisci autem explicabo distinctio libero totam quod perferendis laudantium, harum, debitis iure numquam reprehenderit rerum?</p>
                        <br />
                        <p className='font-lorem fs-6 ms-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ad quos non explicabo ullam, laboriosam quaerat! Necessitatibus nobis exercitationem officia nemo veniam labore inventore? Assumenda vel aspernatur recusandae esse illum?</p>
                        <p className='btns ms-3 mt-5 '>know more</p>
                        <hr className='ms-3 text-left w-25' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Voyage