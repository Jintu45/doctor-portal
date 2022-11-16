import React from 'react';
import banner from '../../../assets/images/chair.png'
import './banner.css'
const Banner = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center py-20 items-center'>
            <div className=''>
                <h1 className='text-5xl'>Your New Smile Starts <br /> Here</h1>
                <p className='mt-4 mb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="py-2 px-4 text-white text-xl font-semibold mb-4 banner-btn">Get started</button>
            </div>
            <div>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;