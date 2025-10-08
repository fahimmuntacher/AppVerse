
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { createContext, useState } from 'react';

export const installContext = createContext()
const RootLayouts = () => {
    const [install, setInstall] = useState([]);
    
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <installContext.Provider value={{install, setInstall}}>
                <div className='flex-1 bg-slate-100'>
                <Outlet></Outlet>
                </div>
            </installContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default RootLayouts;