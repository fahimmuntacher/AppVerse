import React from 'react';
import AppleStore from "../../assets/apple.png";
import PlayStore from "../../assets/playstore.png"

import Hero from './Hero';

const Banner = () => {
    return (
        <div className=''>
            <div className="hero bg-base-200 max-w-[1440px] mx-auto py-10">
            <div className="hero-content text-center">
                <div>
                <h1 className="text-6xl font-bold">We Build  <br />
                    <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] 
           bg-clip-text text-transparent"> Productive</span> Apps</h1>
                <p className="py-6 text-lg text-gray-500">
                    At <span className='font-bold'>AppVerse</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
                <div className='flex justify-center gap-5'>
                <button className="btn border-1 py-6 border-gray-400 shadow-sm rounded-xl ">
                    <a className='flex items-center gap-2' href="https://www.apple.com/app-store/" target='_blank'>
                    <img src={AppleStore} alt="" />
                    <h1 className='text-lg font-semibold'>App Store</h1>
                    </a>
                </button>
                <button className="btn border-1 py-6 border-gray-400 shadow-sm rounded-xl ">
                    <a className='flex items-center gap-2' href="https://play.google.com/store/games?hl=en" target='_blank'>
                        <img src={PlayStore} alt="" />
                        <h1 className='text-lg font-semibold'>Google Play</h1>
                    </a>
                </button>
                </div>
                </div>
            </div>
            </div>
            <Hero></Hero>
        </div>
    );
};

export default Banner;