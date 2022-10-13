import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import logo from "../assets/bmo.gif";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#1e1d1d]">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-teal-500">Hi, my name is</p>
        {/* <div className='pr-150'>
            
            <img className='w-20 mx-auto inline-block float-right' src={logo} alt="HTML icon" />
            </div> */}
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] inline-block">
          Gaston Yauck
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I´m a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I consider myself a responsible, patient, tenacious, cheerful, and
          respectful person. I am always willing to be in constant learning. In
          a job I value a good work environment, predisposition and
          productivity.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-teal-500 hover:border-teal-500">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
