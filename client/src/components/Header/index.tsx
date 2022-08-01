import React from 'react';

import Banner from '../Banner';
import Navbar from '../Navbar';
import { ShortenLink } from '../../Assets/gif';

const Home: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-header-bg bg-right-top bg-no-repeat bg-color-tertiary relative">
      <Navbar />
      <div className='container absolute top-[60%] -translate-y-[60%] w-full flex items-center justify-between'>
        <Banner />
        <div>
          <img className='w-[500px]' src={ShortenLink} alt='Shorten Links with Diminish.one' />
        </div>
      </div>
    </div>
  )
}

export default Home;