import React from 'react';

import ButtonOutlined from '../UI/ButtonOutlined';
import ButtonGradient from '../UI/ButtonGradient';

const Banner: React.FC = () => {
    return (
        <div className='ml-2 w-3/4'>
            <h1 className='text-6xl text-color-primary font-bold font-raleway'>Short Links,<span className='text-color-white'>Big Results</span></h1>
            <p className='mt-1 text-color-secondary text-2xl font-bold font-lusitana'>A URL shortener built with powerful tools to help you grow and protect your brand.</p>
            <div className='flex items-center justify-start mt-3'>
                <ButtonGradient handler={() => {}} text='Start For Free' primary />
                <ButtonOutlined handler={() => {}} text='Go Premium' />
            </div>
        </div>
    );
};

export default Banner;