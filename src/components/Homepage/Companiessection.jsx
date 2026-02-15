import React from "react";

const companies = ["Smile", "Urban", "Natural", "Wave", "Havy", "Alisa"];

const CompaniesSection = () => {
  return (
    <section className="bg-[#111118] py-20">
      <div className="max-w-6xl h-150 mx-auto px-6 text-center">
        
        <h2 className="text-6xl leading-20  font-semibold text-white mb-10">
          Companies we Worked <br/> With in Since 2015
        </h2>

        <div className="flex flex-wrap justify-center gap-7">
          {companies.map((company, index) => (
            <div
              key={index}
              className="bg-black w-40 h-24 px-8 text-center py-4 rounded-2xl text-gray-400 font-semibold"
            >
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompaniesSection;
