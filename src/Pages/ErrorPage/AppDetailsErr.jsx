import React from 'react';
import appErro from "../../assets/OBJECTS.png"
import { Link } from 'react-router';

const AppDetailsErr = () => {
    return (
            <div className='flex flex-col justify-center items-center text-center px-4 py-25'>
                <img 
                    src={appErro} 
                    alt="" 
                    className='w-80 mb-8 animate-bounce' 
                />
                <h1 className='text-5xl font-bold text-red-600 mb-4'>Oops! App Not Found</h1>
                <p className='text-lg text-gray-700 mb-6'>
                   The app you’re looking for doesn’t exist or has been removed.
                </p>
                <Link to="/apps">
                    <button 
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer'> Go Back
                </button>
                </Link>
            </div>
    );
};

export default AppDetailsErr;