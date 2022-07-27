import React from "react";

import { ShortenLink } from "../../../../assets/gif";

const AboutCard: React.FC = () => {
  return (
    <div className="w-1/4 h-2/4 flex flex-col content-center items-center justify-around rounded-lg border-2 border-color-grey-light bg-color-white p-2 mt-6 drop-shadow">
      <img width={250} height={250} src={ShortenLink} alt="Link Shortner gif" />
      <h2 className='text-xl text-color-secondary text-center font-bold font-raleway'>Shorten your Links</h2>
      <div className=" text-center">
        Lorem ipsum dolor sit amet consectetur sit adipisicing elit. Maxime
        mollitia,molestiae quas vel sint commodi sit bi repudiandae sit mit
        consequuntur sit mit voluptatum laborum.
      </div>
    </div>
  );
};

export default AboutCard;