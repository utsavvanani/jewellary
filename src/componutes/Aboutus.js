import React from "react";
import work from '../assets/imges/work.jpg'
const Aboutus = () => {
  return (
    <div className="container" style={{ marginBottom: "30px", marginTop: "50px" }}>
      <div className="row">
        <div className="col-sm-12 col-md-6 ">
          <div className='mt-5'>
            <p className='vayage ms-3  ms-sm-0  ms-lg-5 '>EXCEPTIONAL <br /> CRAFTSMANSHIPS</p>
            <p className='font-lorem ms-sm-0 ms-lg-5  ms-2 px-2' style={{fontSize:"14px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse illum alias tempora! Sint omnis unde adipisci autem explicabo distinctio libero totam quod perferendis laudantium, harum, debitis iure numquam reprehenderit rerum? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed cumque velit esse omnis officiis perspiciatis tenetur fuga sequi unde ipsum dolor, quae expedita, obcaecati tempore commodi qui sunt ratione asperiores?Lorem <br /> ipsum dolor sit amet, consectetur adipisicing elit. Ullam dignissimos fugit consectetur quidem. Incidunt suscipit esse eos saepe nulla <br />dolore quam vel dicta. Molestias quisquam rem similique porro dolorem consectetur!</p>

            <div className="mb-5">
              <p className='btns ms-5 mt-4'>ABOUT  US  </p>
              <hr className='ms-5 text-left w-25' />
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 ">
          <div className="text-center mt-5">
            <img src={work} className="ms-md-5 mb-h-75" alt="" width={"100%"} height={"450px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
