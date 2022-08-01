import React from "react";
import { Logo } from "../../assets/svg";


const SectionFooter: React.FC = () => {
  return (
    <div className="w-full h-[50vh] bg-color-secondary mt-[4rem] flex flex-col justify-center items-center">
        <img src={Logo} alt="Diminish Logo" height={150} width={150} className='' />
        <p className="text-color-white mt-4">&copy;Copyrights Reserved by <span className="font-bold">DIMINISH</span> - 2022</p>
    </div>
  );
};

export default SectionFooter;
