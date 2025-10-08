
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { getInstallApp, setInstallApp } from '../../Utility/Utility';
import useApps from '../../Hooks/useApps';

export const installContext = createContext()
const RootLayouts = () => {
    const [install, setInstall] = useState([]);
    const {apps} = useApps()

    useEffect(() => {
        const storeInstall = getInstallApp("installApp");
        const idNum = storeInstall.map(id => parseInt(id));
        const installAppList = apps.filter(app => idNum.includes(app.id));
        setInstallApp(installAppList);
    }, [apps])
    
    return (
       <div className='flex flex-col min-h-screen'>
            <Navbar />
            <installContext.Provider value={{ install, setInstall }}>
                <div className='flex-1 bg-slate-100'>
                    <Outlet />
                </div>
            </installContext.Provider>
            <Footer />
        </div>
    );
};

export default RootLayouts;