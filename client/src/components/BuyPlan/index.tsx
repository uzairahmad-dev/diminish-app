import React from "react";
import { Boost } from "../../assets/img";
import ButtonGradient from "../UI/ButtonGradient";

const SectionFooter: React.FC = () => {
  return (
    <div className="w-[full] h-1/4 mt-[4rem] flex justify-center items-center">
        <div className="w-[70%] bg-color-white flex p-2 rounded-lg border-2 border-color-grey-light drop-shadow">
            <img src={Boost} alt="Boost" width={150} height={150} />
            <div className="mt-4">
                <h3 className="text-color-secondary font-bold text[1.5rem]">Take it to the next level</h3>
                <p className="">Take advantage of more useful features. All this to manage your links in an intuitive and simple way.</p>
            </div>
            <div className="w-[20%] mt-8">
            <ButtonGradient handler={() => {}} text='Buy Plan' primary />
            </div>
        </div>
    </div>
  );
};

export default SectionFooter;
