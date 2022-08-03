import React from 'react';

type ButtonGradientProps = {
  text: string,
  primary?: Boolean,
  green?: Boolean,
  red?: Boolean,
  handler: () => void
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({ text, handler, primary, green, red }) => {
  return (
    <button onClick={handler} type="button" className={`text-color-white bg-gradient-to-r ${primary ? 'from-color-primary via-color-extra-1 to-color-primary' : green ? 'from-color-green via-color-green-1 to-color-green' : red ? 'from-color-red via-color-red-1 to-color-red' : ''} hover:bg-gradient-to-br hover:text-color-tertiary focus:outline-none font-bold font-raleway rounded-lg text-xl px-5 py-2.5 text-center ease-linear transition-all duration-200`}>
      {text}
    </button>
  )
}

export default ButtonGradient;