import React from 'react';

import Banner from '../Banner';
import { ShortenLink } from '../../assets/gif';

const Home: React.FC = () => {
  return (
    <div className="w-full h-[100vh] bg-header-bg bg-right bg-no-repeat bg-color-tertiary relative">
      <div className='container absolute top-1/2 -translate-y-1/2 w-full flex items-center justify-between'>
        <Banner />
        <div>
          <img className='' src={ShortenLink} alt='Shorten Links with Diminish.one' />
        </div>
      </div>
    </div>
  )
}

export default Home;