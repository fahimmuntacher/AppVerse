import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import erroImage from "../../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1 flex flex-col justify-center items-center text-center px-4'>
                <img 
                    src={erroImage} 
                    alt="" 
                    className='w-80 max-w-full mb-8 animate-bounce' 
                />
                <h1 className='text-5xl font-bold text-red-600 mb-4'>Oops! Something went wrong</h1>
                <p className='text-lg text-gray-700 mb-6'>
                    The page you are looking for doesn't exist or an error occurred.
                </p>
                <Link to="/home">
                    <button 
                    className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition'> Go Back Home
                </button>
                </Link>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;