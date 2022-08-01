import React from "react";
import ButtonPrimary from "../../ButtonPrimary";

type PricingCardProps = {
  heading: string,
  price: string,
  feature_1: string,
  feature_2: string,
  feature_3: string,
  feature_4: string,
  feature_5: string,
  feature_6: string,
  feature_7: string,
  feature_8: string,
  feature_9: string,
  color_tag: string,
  color_border: string
}

const PricingCard: React.FC<PricingCardProps> = ({heading, price, feature_1, feature_2, feature_3, feature_4, feature_5, feature_6, feature_7, feature_8, feature_9, color_tag, color_border}) => {
  return (
    <div className="bg-color-white w-1/4 pl-8 pr-8 pt-2.5 pb-5 rounded-lg border-b-4 border-solid border-color-primary shadow-lg">
      <h2 className="mb-3.5 font-bold text-2xl text-color-secondary">{heading}</h2>
      <div className={`relative bg-color-${color_tag} w-[98%] h-[11%] ml-[3rem] py-[.2rem] px-[1.2rem] border-none`}>
        <p className="m-0 pt-[.4rem] flex font-md text-xl mr-[5px] text-color-white">
          $ {price} /month
        </p>
        <div className={`absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] border-t-color-${color_border} border-b-color-grey-light border-r-color-grey-light border-b-[10px] border-r-[13px] z-[-6]`}></div>
      </div>
      <div className="mt-10">
        <ul className="p-0 text-md">
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_1}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_2}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_3}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_4}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_5}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_6}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_7}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_8}</span>
          </li>
          <li className="text-color-secondary list-none mb-2 flex items-center gap-[.5rem]">
            <span className="font-sm">{feature_9}</span>
          </li>
        </ul>
      </div>
      <div className="flex justify-center">
        <ButtonPrimary handler={() => {}} text='Subscribe' color_1="secondary" color_2="primary" color_3="secondary" />
      </div>
    </div>
  );
};

export default PricingCard;