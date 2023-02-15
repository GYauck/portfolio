import React from "react";
/* import workInProgress from "../assets/workInProgress.png"; */
import Tilt from "react-parallax-tilt";
import data from "../data.json"
import { useState } from "react";

const Work = () => {

  const [work] = useState(data.work)
  console.log(work[0].image)
  return (
    <div name="work" className="w-full md:h-full text-gray-300 bg-[#1e1d1d]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-teal-500">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*Card*/}
          {work.map((work) => (
            <Tilt>
            <div className="absolute bg-teal-500 rounded-xl -inset-0 blur -z-10 w-60 p-2"></div>

            <div class="w-60 h-full p-2 bg-[#1e1d1d] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
              <img className="h-48 w-56 object-cover rounded-xl" src={work.image} alt=""/>
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">{work.name}</h2>
                <p className="h-40 text-sm text-gray-600">
                {work.description}
                </p>
              </div>
              <div className="m-2">
                <a role="button" href={work.gitHub} target="_blank" rel="noreferrer" className="text-white bg-purple-600 px-1 py-1 mr-5 rounded-md hover:bg-purple-700">
                  GitHub
                </a>
                <a role="button" href={work.live} target="_blank" rel="noreferrer" className="text-white bg-purple-600 px-1 py-1 rounded-md hover:bg-purple-700">
                  Live/Youtube
                </a>
              </div>
            </div>
          </Tilt>
          ))}
          

          
        </div>
      </div>
    </div>
  );
};

export default Work;
