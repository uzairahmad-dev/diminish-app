import React from "react";
import ButtonGradient from "../UI/ButtonGradient";

const SectionFooter: React.FC = () => {
  return (
    <div className="w-[full] h-1/4 mt-[4rem] flex justify-center items-center gap-2">
        <input
          required
          type="text"
          name="text"
          placeholder="Enter Your Link"
          className="w-7/12 border-2 bg-color-tertiary border-color-white rounded-lg p-3 text-base text-color-black ease-in-out delay-150 focus:outline-none"
        />
        <ButtonGradient handler={() => {}} text="Shorten" primary />
    </div>
  );
};

export default SectionFooter;
