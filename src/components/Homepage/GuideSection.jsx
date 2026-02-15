import React from "react";
import Btn from "../Common/Btn";

const GuideSection = () => {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 -mt-20">
        
        {/* Left Orbit Graphic */}
        <div className="relative flex justify-center">
          
           <div className=" w-150 h-135  bg-[url('Guide.png')] bg-contain bg-no-repeat"></div>
          {/* <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white z-10">
            ⚙
          </div> */}
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4 ">
          <h2 className="text-6xl font-semibold  text-white mb-4">
            We're here to guide and help you at all times
          </h2>

          <p className="text-gray-400 mb-6">
            A good design is not only aesthetically pleasing,
            but also functional. It should be able to solve the problem.
          </p>

          <Btn name="Download"/>
        </div>

      </div>
    </section>
  );
};

export default GuideSection;
