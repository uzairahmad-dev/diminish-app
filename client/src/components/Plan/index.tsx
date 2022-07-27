import React from "react";
import PriceCard from '../Cards/PriceCard'

const About: React.FC = () => {
  return (
    <div className="w-full h-[100vh] mt-7 text-center">
      <h2 className="text-6xl text-color-secondary font-bold font-raleway">
        Buy Our Plan
      </h2>
      <div>
        <PriceCard />
      </div>
    </div>
  );
};

export default About;
