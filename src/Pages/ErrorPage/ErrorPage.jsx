import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <h1 className='text-4xl text-center font-bold'>Error Bodda</h1>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;