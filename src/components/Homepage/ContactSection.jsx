import React from "react";
import Btn from "../Common/Btn";

const ContactSection = () => {
  return (
    <section className="bg-black py-24 mt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Globe */}
        <div className="flex justify-center">
          <div className=" w-150 h-135  bg-[url('Globe.png')] bg-contain bg-no-repeat"></div>
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mb-6">
            A good design is not only aesthetically pleasing,
            but also functional. It should be able to solve the problem.
          </p>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-[#111118] text-white rounded-lg"
            />

            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 bg-[#111118] text-white rounded-lg"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 bg-[#111118] text-white rounded-lg"
            ></textarea>

            <Btn name="Get in touch"/>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
