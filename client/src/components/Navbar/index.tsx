import React, { useState } from 'react';

import { Logo, Close, Menu } from '../../assets/svg';

type Props = {}

const Navbar: React.FC = (props: Props) => {
    let Links =[
        {name:"Why Diminish?",link:"/"},
        {name:"Pricing",link:"/"},
        {name:"Create Account",link:"/"}
    ];

    // let [open,setOpen] = useState(false);

    return (
      <div className='w-full top-0 left-0'>
        <div className='flex items-center justify-between bg-none py-4 px-10'>
            <div className='font-bold text-2xl cursor-pointer flex items-center text-color-grey-light'>
                <img className='w-48' src={Logo} alt="diminish logo" />
            </div>
            <ul className='flex items-center static z-auto left-0 w-auto transition-all duration-500 ease-in'>
            {
                Links.map((link)=>(
                <li key={link.name} className='ml-8 text-xl font-raleway font-light'>
                    <a href={link.link} className='text-color-grey-light hover:text-color-white transition-all duration-300'>{link.name}</a>
                </li>
                ))
            }
            </ul>
        </div>
      </div>
    )
}

export default Navbar;