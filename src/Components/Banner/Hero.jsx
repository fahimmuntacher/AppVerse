import React from 'react';
import heroImg from "../../assets/hero.png"

const Hero = () => {
    const cardData = [
        {
            title: "Total Downloads",
            download: "29.6M",
            cardP: "21% more than last month"
        },
        {
            title: "Total Reviews",
            download: "950K",
            cardP: "46% more than last month"
        },
        {
            title: "Active Apps",
            download: "29.6M",
            cardP: "31 more will Launch"
        },
    ]
    return (
        <div>
            <div className='mt-10 '>
                <div className="flex justify-center px-4 sm:px-6 lg:px-8">
                    <img
                        src={heroImg}
                        alt="Hero"
                        className="w-full max-w-[600px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1000px] h-auto object-contain"
                    />
                </div>

                <div className='w-full h-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center py-16 px-4'>
                   <div className='mx-w-[1440px] mx-auto flex flex-col items-center justify-center'>
                     <div>
                        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10'>Trusted by Millions, Built for You</h1>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
                        {cardData.map((card, index) => (
                            <div
                            key={index}
                            className="space-y-2.5 text-white min-w-[150px] sm:min-w-[180px]"
                            >
                            <h3 className="text-base sm:text-lg">{card.title}</h3>
                            <h1 className="text-3xl sm:text-4xl font-bold">{card.download}</h1>
                            <p className="text-gray-300 text-sm">{card.cardP}</p>
                            </div>
                        ))}
                        </div>
                   </div>


                </div>
            </div>
        </div>
    );
};

export default Hero;