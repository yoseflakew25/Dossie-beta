import React from 'react'
import tempPic from "../assets/sec.png";

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <section id="about" className="p-16">
        <div className="lg:bg-gray-50 lg:p-16 rounded-[4rem] space-y-6 md:flex md:gap-6 justify-center md:space-y-0 lg:items-center">
          <div className="mx-8 md:7/12 lg:w-1/2">
            <h2 className="text-3xl font-bold text-primary opacity-75 md:text-4xl ">
            IC’s Digital Record Management System
            </h2>
            <p className="my-8 text-gray-600">
            This system is designed exclusively for the Ethiopian Insurance Corporation to provide a seamless, secure, and efficient way to access and manage customer records. With our tailored solution, EIC can streamline operations and deliver superior service to its clients.

            </p>

            <button className="btn btn-primary opacity-75 px-12 text-white mr-4">Get Started</button>
          </div>
          <div className="md:4/12 lg:w-1/3">
            <img src={tempPic} alt="image" loading="lazy" width="" height="" />
          </div>
        </div>
      </section>

      <div className="px-16 py-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider uppercase rounded-full text-primary opacity-75 bg-teal-accent-400">
              Make history
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary opacity-75 sm:text-4xl md:mx-auto">
            <span className="relative inline-block mr-2">
              {/* <svg
                viewBox="0 0 52 24"
                fill="#14B8A6"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                  width="52"
                  height="24"
                ></rect>
              </svg> */}
              <span className="relative">How</span>
            </span>
            To use our website
          </h2>
          
        </div>
        <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
          <div className="p-8 duration-300 transform bg-white border-2 border-dashed rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary opacity-75">
                1
              </p>
              <p className="text-lg font-bold leading-5">Sign in / Sign up</p>
            </div>
            <p className="text-sm text-body-color">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless.
            </p>
          </div>
          <div className="p-8 duration-300 transform bg-white border-2 border-dashed rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary opacity-75">
                2
              </p>
              <p className="text-lg font-bold leading-5">choose pricing options</p>
            </div>
            <p className="text-sm text-body-color">
              Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
              flail 180 berm.
            </p>
          </div>
          <div className="relative p-8 duration-300 transform bg-white border-2 rounded-[2rem] shadow-sm border-primary hover:-translate-y-2">
            <div className="flex items-center mb-2">
              <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-primary opacity-75">
                3
              </p>
              <p className="text-lg font-bold leading-5">start accesing tenders</p>
            </div>
            <p className="text-sm text-body-color">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped.
            </p>
            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-primary  sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
              <svg
                className="text-white w-7"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <polyline
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  points="6,12 10,16 18,8"
                ></polyline>
              </svg>
            </p>
          </div>
        </div>
      </div>

    
    </>
  );
}
