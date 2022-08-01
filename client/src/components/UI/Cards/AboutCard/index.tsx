import React from "react";

type AboutCardProps = {
  image: string,
  title: string,
  description: string,
}

const AboutCard: React.FC<AboutCardProps> = ({image, title, description}) => {
  return (
    <div className="w-1/4 h-2/4 flex flex-col content-center items-center justify-around rounded-lg border-2 border-color-grey-light bg-color-white p-2 mt-6 drop-shadow">
      <img width={250} height={250} src={image} alt="About Card gif" />
      <h2 className='text-xl text-color-secondary text-center font-bold font-raleway'>{title}</h2>
      <div className=" text-center">
        {description}
      </div>
    </div>
  );
};

export default AboutCard;