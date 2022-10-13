import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#1e1d1d] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-teal-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I`m Gaston, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Since my childhood I have instilled hard work, dedication and
              commitment so that our goals are met. This is what I always try to
              apply in every project I start. After spending more than 9 years
              as a computer-oriented administrative employee, I decided to
              change the course of my life by focusing on what I really like,
              which is programming. <br />I am open to any type of work and my
              schedule is super flexible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
