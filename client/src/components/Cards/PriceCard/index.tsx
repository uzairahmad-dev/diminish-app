import React from "react";
import ButtonPrimary from "../../UI/ButtonPrimary";

const AboutCard: React.FC = () => {
  return (
    <div className="bg-color-white w-[15rem] pl-8 pr-8 pt-2.5 pb-5 rounded-lg border-b-4 border-solid border-color-primary shadow-lg">
      <h2 className="mb-3.5 font-bold text-2xl text-color-secondary">Free Plan</h2>
      <div className="relative bg-color-red w-[14.46rem] ml-[-0.65rem] py-[.2rem] px-[1.2rem] border-none">
        <p className="m-0 pt-[.4rem] flex font-md text-xl mr-[5px] text-color-white">
          $ 0.00 /month
        </p>
        <div className="absolute bottom-[-23px] right-0 w-0 h-0 border-t-[13px] border-t-color-red-dark border-b-color-grey-light border-r-color-grey-light border-b-[10px] border-r-[13px] z-[-6]"></div>
      </div>
      <div className="mt-10">
        <ul className="p-0 text-md">
          <li className="text-color-secondary list-none mb-5 flex items-center gap-[.5rem]">
            <svg
              className="w-[.9rem] fill-current"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span className="font-sm">Shorten Links</span>
          </li>
          <li className="text-color-secondary list-none mb-5 flex items-center gap-[.5rem]">
            <svg
              className="w-[.9rem] fill-current"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span className="font-sm">Filter</span>
          </li>
          <li className="text-color-secondary list-none mb-5 flex items-center gap-[.5rem]">
            <svg
              className="w-[.9rem] fill-current"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
            </svg>
            <span className="font-sm">Authentication</span>
          </li>
        </ul>
      </div>
      <ButtonPrimary />
    </div>
  );
};

export default AboutCard;
