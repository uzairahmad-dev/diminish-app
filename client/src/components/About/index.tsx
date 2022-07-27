import React from "react";
import AboutCard from "../Cards/AboutCard";

const About: React.FC = () => {
  return (
    <div className="w-full h-[100vh] mt-7 text-center">
      <h2 className="text-6xl text-color-secondary font-bold font-raleway">
        Short Links,Big Results
      </h2>
      <div>
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
