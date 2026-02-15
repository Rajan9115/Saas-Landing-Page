import React from "react";

const CTASection = () => {
  return (
    <div className="relative">
      <div
        className="
          absolute 
          -top-[320px] 
          left-[208px] 
          w-[1110px] 
          h-[425px] 
          rounded-[40px] 
          overflow-hidden
          flex items-center
          px-20
        "
        style={{
          background:
            "linear-gradient(135.66deg, #FF9898 14.73%, #8054FF 86.33%)",
        }}
      >
        {/* Left Content */}
        <div className="max-w-[520px] text-white">
          <p className="text-lg mb-4 opacity-90">
            Love our Our Tool?
          </p>

          <h2 className="text-5xl font-bold leading-tight mb-8">
            Fell Free to Join our
            <br />
            15 Days Free Trial
          </h2>

          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:opacity-90 transition">
            Download Template
          </button>
        </div>

        {/* Right World Map (Optional Image) */}
        <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center opacity-80">
          <img
            src="/World-map.png"  // <-- replace with your map image path
            alt="World Map"
            className="max-h-[85%] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CTASection;

