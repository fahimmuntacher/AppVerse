import React from 'react';
import heroImg from "../../assets/hero.png"

const Hero = () => {
    return (
        <div>
            <div className='mt-10 '>
                <div className='flex justify-center'>
                    <img src={heroImg} alt="" />
                </div>
                <div className='w-full h-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center flex flex-col justify-center'>
                    <div>
                        <h1 className='sm:py-10 sm:px-0 py-8 px-2 text-4xl text-white font-bold'>Trusted by Millions, Built for You</h1>
                    </div>

                    <div className='flex flex-wrap justify-center gap-15 pb-5'>
                        <div className='space-y-2.5 text-white'>
                            <h3 className='text-lg'>Total Downloads</h3>
                            <h1 className='text-4xl font-bold'>29.6M</h1>
                            <p className='text-gray-300'>21% more than last month</p>
                        </div>
                        <div className='space-y-2.5 text-white'>
                            <h3 className='text-lg'>Total Reviews</h3>
                            <h1 className='text-4xl font-bold'>950K</h1>
                            <p className='text-gray-300'>46% more than last month</p>
                        </div>
                        <div className='space-y-2.5 text-white'>
                            <h3 className='text-lg'>Active Apps</h3>
                            <h1 className='text-4xl font-bold'>29.6M</h1>
                            <p className='text-gray-300'>31 more will Launch</p>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;