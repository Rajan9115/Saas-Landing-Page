import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#111118] py-16 text-gray-400">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        <div className="font-extralight">
          <div className="w-12 h-12 bg-[url('/Vector.png')] bg-contain bg-no-repeat bg-center mb-2" />
          <p>
            A good design is not only aesthetically pleasing,
            but also functional.It should be able to solve the problem
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Sections</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Section One</li>
            <li>Section Two</li>
            <li>Section Three</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>

      </div>

      <div className="text-center mt-10 text-sm">
        All Rights Reserved 2026
      </div>
    </footer>
  );
};

export default Footer;
