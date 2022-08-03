import React from "react";
import PricingCard from "../UI/Cards/PricingCard";

const SectionPricing: React.FC = () => {
  return (
    <div className="w-full my-24">
      <h1 className="text-color-secondary font-bold font-lusitana text-5xl text-center">Our Plans</h1>
      <div className="mt-14 flex justify-around">
        <PricingCard  />
        <PricingCard basic />
        <PricingCard premium />
      </div>
    </div>
  );
};

export default SectionPricing;
