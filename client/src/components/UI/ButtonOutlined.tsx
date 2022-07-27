import React from 'react';

type Props = {}

const ButtonOutlined: React.FC = (props: Props) => {
  return (
    <button className="text-xl px-5 py-2.5 mx-2 text-color-primary border-color-primary border-2 hover:bg-color-extra-1 hover:border-color-extra-1 hover:text-color-white font-raleway font-bold capitalize rounded-lg outline-none cursor-pointer focus:outline-none text-center ease-linear transition-colors duration-300">
      Go Premium
    </button>
  )
}

export default ButtonOutlined;