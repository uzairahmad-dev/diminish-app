import React from "react";

import { Logo } from "../../assets/svg";

const Footer: React.FC = () => {
  return (
    <div className="w-full h-[20vh] bg-color-secondary flex flex-col justify-center items-center">
        <img src={Logo} alt="Diminish Logo" height={150} width={150} />
        <p className="text-color-grey-light mt-2 text-xs">&copy; 2022</p>
    </div>
  );
};

export default Footer;
