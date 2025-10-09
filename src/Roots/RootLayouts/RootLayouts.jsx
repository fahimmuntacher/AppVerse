
import { Outlet, useLocation } from 'react-router';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { createContext, useEffect, useState } from 'react';
import { getInstallApp } from '../../Utility/Utility';
import useApps from '../../Hooks/useApps';
import { ToastContainer } from 'react-toastify';

export const installContext = createContext()
const RootLayouts = () => {
    const [install, setInstall] = useState([]);
    const [showLoading, setShowLoading] = useState(true);
    const {apps ,loading} = useApps()
    const location = useLocation()

    useEffect(() => {
    const storeInstall = getInstallApp("installApp");
    const idNum = storeInstall.map(id => parseInt(id));
    const installAppList = apps.filter(app => idNum.includes(app.id));
    setInstall(installAppList); 
  }, [apps]);


//   route changing loading 
  useEffect(() => {
    setShowLoading(true);
    const timer = setTimeout(() => setShowLoading(false), 150);
    return () => clearTimeout(timer);
  }, [location]);

    return (
       <div className='flex flex-col min-h-screen'>
            <Navbar />
            <installContext.Provider value={{ install, setInstall,showLoading, setShowLoading }}>
                <div className='flex-1 bg-slate-100'>
                    <Outlet />
                </div>
            </installContext.Provider>
            <Footer />

             <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                theme="colored"
                />

        </div>
    );
};

export default RootLayouts;