import React, { useContext, useEffect } from 'react';
import { installContext } from '../../Roots/RootLayouts/RootLayouts';
import { getInstallApp, unInstallApp } from '../../Utility/Utility';
import useApps from '../../Hooks/useApps';
import { Download } from 'lucide-react';
import halfStar from "../../assets/halfstar.png";
import { Link } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { toast } from 'react-toastify';

const Installation = () => {
  const { apps, loading } = useApps();
  const { install, setInstall } = useContext(installContext);

  useEffect(() => {
    const storedInstallApp = getInstallApp("installApp");
    if (!storedInstallApp) return;
    const idNum = storedInstallApp.map(id => parseInt(id));
    const installList = apps.filter(app => idNum.includes(app.id));
    setInstall(installList);
  }, [apps, setInstall]);

  const uninstallApp = (id) => {
    unInstallApp("installApp", id);
    const updatedList = install.filter(app => app.id !== id);
    setInstall(updatedList);
    toast.warning("App uninstall succesfully!")
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="py-20 max-w-[1440px] mx-auto">
      <div className="text-center space-y-2.5">
        <h1 className="text-5xl font-semibold">Your Installed Apps</h1>
      </div>

      
      {install.length === 0 ? (
        <div className="text-center mt-14 py-20 bg-gray-200 rounded-xl shadow-inner">
          <h2 className="text-2xl font-semibold text-gray-700">No Apps Installed!</h2>
          <Link to="/apps">
            <button className="mt-5 border-0 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-lg px-8 py-4 rounded-xl hover:from-[#9F62F2] hover:to-[#632EE3] transition">
              Install Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="mt-20 space-y-8">
          {install.map(app => (
            <div
              key={app.id}
              className="flex items-center bg-white p-5 shadow-sm border border-gray-200 rounded-xl hover:shadow-md transition"
            >
              <div className="sm:w-[80px] w-[50px] flex-shrink-0">
                <img src={app.image} alt={app.title} className="w-full h-auto object-contain" />
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="sm:ml-8 ml-3 border-l-2 border-gray-300 pl-3">
                  <h1 className="text-xl font-bold">{app.title}</h1>

                  <div className="flex items-center gap-4 mt-3 text-gray-600">
                    <h2 className="text-lg sm:flex hidden  font-semibold text-blue-600 items-center gap-2">
                      <Download size={18} />
                      {app.downloads}M
                    </h2>

                    <h2 className="text-lg font-medium sm:font-semibold text-[#FF8811] flex items-center gap-2">
                      <img className="w-5" src={halfStar} alt="rating" />
                      {app.ratingAvg}
                    </h2>

                    <p className="text-lg font-medium">{app.size} MB</p>
                  </div>
                </div>

                <button
                  onClick={() => uninstallApp(app.id)}
                  className="ml-4 bg-[#00D390] text-white px-6 py-3 text-lg rounded-xl hover:bg-[#00b67a] transition duration-300 cursor-pointer"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Installation;
