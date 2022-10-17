import React from "react";
import workInProgress from "../assets/workInProgress.png";
import Tilt from "react-parallax-tilt";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#1e1d1d]">
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
          <Tilt>
            <div className="absolute bg-teal-500 rounded-xl -inset-0 blur -z-10 w-60 p-2"></div>

            <div class="w-60 p-2 bg-[#1e1d1d] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
              <img className="h-auto object-cover rounded-xl" src={workInProgress} alt=""/>
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">The Movie Database</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus, deserunt beatae sequi exercitationem dolores possimus voluptas doloribus qui blanditiis? Fuga dolore quibusdam dicta ipsa at, odio cum corrupti vel.
                </p>
              </div>
              <div className="m-2">
                <a role="button" href="#" className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
                  Learn More
                </a>
              </div>
            </div>
          </Tilt>

          {/*Card*/}
          <Tilt>
            <div className="absolute bg-teal-500 rounded-xl -inset-0 blur -z-10 w-60 p-2"></div>

            <div class="w-60 p-2 bg-[#1e1d1d] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
              <img className="h-auto object-cover rounded-xl" src={workInProgress} alt=""/>
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">E-Commerce</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus, deserunt beatae sequi exercitationem dolores possimus voluptas doloribus qui blanditiis? Fuga dolore quibusdam dicta ipsa at, odio cum corrupti vel.
                </p>
              </div>
              <div className="m-2">
                <a role="button" href="#" className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
                  Learn More
                </a>
              </div>
            </div>
          </Tilt>

          {/*Card*/}
          <Tilt>
            <div className="absolute bg-teal-500 rounded-xl -inset-0 blur -z-10 w-60 p-2"></div>

            <div class="w-60 p-2 bg-[#1e1d1d] rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl relative">
              <img className="h-auto object-cover rounded-xl" src={workInProgress} alt=""/>
              <div className="p-2">
                <h2 className="font-bold text-lg mb-2 ">Prode</h2>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem incidunt magnam ea voluptatum beatae modi vel repudiandae tempore error molestias libero totam, minima, neque porro temporibus sit alias perspiciatis!
                </p>
              </div>
              <div className="m-2">
                <a role="button" href="#" className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700">
                  Learn More
                </a>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Work;
