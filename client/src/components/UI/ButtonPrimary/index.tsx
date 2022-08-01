import React from 'react';

type ButtonPrimaryProps = {
  text: string,
  color_1: string,
  color_2: string,
  color_3: string,
  handler: () => void
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, color_1, color_2, color_3, handler }) => {
  return (
    <button onClick={handler} type="button" className={`text-color-white bg-gradient-to-r from-color-${color_1} via-color-${color_2} to-color-${color_3} hover:bg-gradient-to-br hover:text-color-tertiary focus:outline-none font-bold font-raleway rounded-lg text-xl px-5 py-2.5 text-center ease-linear transition-all duration-200`}>
      {text}
    </button>
  )
}

export default ButtonPrimary;