import React from 'react'

type Props = {}

const ButtonPrimary = (props: Props) => {
  return (
    <button type="button" className="text-color-white bg-gradient-to-r from-color-primary via-color-extra-1 to-color-primary hover:bg-gradient-to-br hover:text-color-tertiary focus:outline-none font-bold font-raleway rounded-lg text-xl px-5 py-2.5 text-center ease-linear transition-all duration-200">
      Start For Free
    </button>
  )
}

export default ButtonPrimary;