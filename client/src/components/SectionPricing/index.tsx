import React from "react";
import PricingCard from "../UI/Cards/PricingCard";

const SectionPricing: React.FC = () => {
  return (
    <div className="w-full h-[100vh] mt-6">
      <h1 className="text-color-secondary font-bold text-6xl text-center">
        Buy Our Plans
      </h1>
      <div className="mt-10 flex justify-around">
        <PricingCard
          heading="Free Plan"
          price="0.00"
          feature_1="Shorten Links"
          feature_2="No Authentication"
          feature_3="No Filter Links"
          feature_4="No Stats"
          feature_5="No Conversion to QR code"
          feature_6="No Share link"
          feature_7="No Specify Private or Public link"
          feature_8="No Location"
          feature_9="No Device Type"
          color_tag="primary"
          color_border="primary"
        />
        <PricingCard
          heading="Basic Plan"
          price="5.00"
          feature_1="Shorten Links"
          feature_2="Authentication"
          feature_3="Filter Links"
          feature_4="Stats"
          feature_5="Conversion to QR code"
          feature_6="Share link"
          feature_7="Specify Private or Public link"
          feature_8="Location"
          feature_9="Device Type"
          color_tag="green"
          color_border="green"
        />
        <PricingCard
          heading="Premium Plan"
          price="10.00"
          feature_1="Shorten Links"
          feature_2="Authentication"
          feature_3="Filter Links"
          feature_4="Stats"
          feature_5="Conversion to QR code"
          feature_6="Share link"
          feature_7="Specify Private or Public link"
          feature_8="Location"
          feature_9="Device Type"
          color_tag="red"
          color_border="red"
        />
      </div>
    </div>
  );
};

export default SectionPricing;
