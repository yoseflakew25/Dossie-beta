import React from 'react'
import temp from "../../assets/sec.png";
import { Link } from 'react-router-dom';

const Section4 = () => {
  return (
    <div className="py-16 -mt-4">
      <div className="px-6 m-auto text-gray-600 xl:container md:px-12 xl:px-16">
        <div className="lg:bg-[#f6f9ff] lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="md:4/12 lg:w-1/3">
            <img
              src={temp}
              alt="image"
              loading="lazy"
              width=""
              height=""
    
            />
          </div>
          <div className="mx-8 md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary opacity-75 md:text-4xl ">
            Fast , Secure and Easy Access

            </h2> 
            <p className="my-8 text-gray-600">
            With our tailored solution, EIC can streamline operations and deliver superior service to its clients.              The system is designed with advanced security measures to protect sensitive data, ensuring that client information remains confidential and secure. </p>
<Link to="/documents">
<button className="btn btn-primary opacity-75 px-12 text-white mr-4">Get Started</button>
</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4