import React from "react";

import FeatureList from "../../../FeatureList";
import ButtonGradient from "../../ButtonGradient";

type PricingCardProps = {
  basic?: Boolean,
  premium?: Boolean
}

const PricingCard: React.FC<PricingCardProps> = ({basic, premium}) => {
  return (
    <div className={`bg-color-white w-1/4 px-8 py-5 rounded-lg border-b-4 border-solid ${basic ? 'border-color-green' : premium ? 'border-color-red' : 'border-color-primary'} shadow-lg`}>
      <h2 className="mb-3.5 font-bold text-2xl text-color-secondary">{basic ? "Basic Plan" : premium ? 'Premium Plan' : 'Free Plan'}</h2>
      <div className={`relative bg-gradient-to-tr ${basic ? 'from-color-green via-color-green-1 to-color-green' : premium ? 'from-color-red via-color-red-1 to-color-red' : 'from-color-primary via-color-extra-1 to-color-primary'} w-[98%] h-[11%] ml-[3rem] py-[.2rem] px-[1.2rem] border-none`}>
        <p className="m-0 pt-[.4rem] flex font-bold text-xl mr-[5px] text-color-white">${basic ? '5.00' : premium ? '10.00' : '0.00'}/month</p>
        <div className={`absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] ${basic ? 'border-t-color-green' : premium ? 'border-t-color-red' : 'border-t-color-primary'} border-b-color-grey-light border-r-color-grey-light border-b-[10px] border-r-[13px] z-[-6]`}></div>
      </div>
      <div className="mt-5">
        <FeatureList basic={basic} premium={premium} />
      </div>
      <div className="flex justify-center mt-4 mb-2">
        <ButtonGradient handler={() => {}} text={!basic && !premium ? 'Get Started' : 'Subscribe'} primary={!basic && !premium} green={basic} red={premium} />
      </div>
    </div>
  );
};

export default PricingCard;