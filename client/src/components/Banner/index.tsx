import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="ml-6">
      <h1 className="">
        <span className="text-[#6C63FF] font-black text-6xl">Short Links,</span>{" "}
        <span className="text-[#fff] font-black text-6xl ml-4">
          Big Results
        </span>
      </h1>
      <p className="text-[#323377] font-medium text-xl mt-4">
        A URL shortener built with powerful tools to help  you grow and protect
        your brand.
      </p>
    </div>
  );
};

export default Banner;
