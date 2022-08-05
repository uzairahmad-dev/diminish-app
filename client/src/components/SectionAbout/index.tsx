import React from "react";
import AboutCard from "../UI/Cards/AboutCard";

const SectionAbout: React.FC = () => {
  return (
    <div className="w-full h-[100vh] mt-6">
      <h1 className="text-color-secondary font-bold text-6xl text-center">
        Why Choose Diminish?
      </h1>
      <div className="mt-10 flex justify-around">
        <AboutCard
          image="../../assets/gif/illustration-1.gif"
          title="Shorten Your Links"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi sit bi repudiandae sit mit consequuntur sit mit voluptatum laborum"
        />
        <AboutCard
          image="../../assets/gif/illustration-2.gif"
          title="Link Analytics"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi sit bi repudiandae sit mit consequuntur sit mit voluptatum laborum"
        />
        <AboutCard
          image="../../assets/gif/illustration-3.gif"
          title="Link Management"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint commodi sit bi repudiandae sit mit consequuntur sit mit voluptatum laborum"
        />
      </div>
    </div>
  );
};

export default SectionAbout;
