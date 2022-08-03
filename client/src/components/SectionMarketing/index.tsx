import React from "react";

import AboutCard from "../UI/Cards/AboutCard";
import { ShortenLink, Management, Analytics } from '../../assets/gif'

const SectionAbout: React.FC = () => {
  return (
    <div className="w-full my-24">
      <h1 className="text-color-secondary font-lusitana font-bold text-5xl text-center">
        Why Choose Us?
      </h1>
      <div className="mt-14 flex justify-around">
        <AboutCard
          image={ShortenLink}
          title="Shorten Your Links"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint. Lorem ipsum dolor sit amet consectetur sit adipisicing elit."
        />
        <AboutCard
          image={Analytics}
          title="Link Analytics"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint. Lorem ipsum dolor sit amet consectetur sit adipisicing elit."
        />
        <AboutCard
          image={Management}
          title="Link Management"
          description="Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime mollitia,molestiae quas vel sint.Lorem ipsum dolor sit amet consectetur sit adipisicing elit."
        />
      </div>
    </div>
  );
};

export default SectionAbout;
