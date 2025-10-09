import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from '../../assets/icon-review.png';
import { ArrowLeftToLine, Download, CheckCircle } from 'lucide-react';
import AppRatingsGraph from './AppRatingsGraph';
import { getInstallApp, setInstallApp } from '../../Utility/Utility';
import Loading from '../../Components/Loading/Loading';
import AppDetailsErr from '../ErrorPage/AppDetailsErr';
import { toast } from 'react-toastify';
import { installContext } from '../../Roots/RootLayouts/RootLayouts';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const navigate = useNavigate();
  const [downloaded, setDownloaded] = useState(false);
  const { showLoading, setShowLoading } = useContext(installContext);
  
  if (!/^\d+$/.test(id)) {
    return <AppDetailsErr />;
  }

  const idNum = parseInt(id);
  const appDetail = apps.find(app => app.id === idNum);
  const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = appDetail || {};

  useEffect(() => {
    const installed = getInstallApp("installApp");
    if (installed.includes(id)) {
      setDownloaded(true);
    }
  }, [id]);

  const handleInstallList = () => {
    setInstallApp("installApp", id);
    setDownloaded(true);
    toast.success("App installed successfully! 🚀");
  };

  useEffect(() => {
    if (!loading) {
      const delay = setTimeout(() => setShowLoading(false), 200);
      return () => clearTimeout(delay);
    }
  }, [setShowLoading, loading]);

  // Handle loading and invalid data
  if (loading || showLoading) {
    return <Loading />;
  }

  if (!appDetail) {
    return <AppDetailsErr />;
  }

  // card UI
  return (
    <div className='max-w-[1440px] mx-auto py-15'>
      <div className='flex items-center flex-col sm:flex-row space-y-5 sm:space-x-5 h-fit border-b-1 pb-8 border-gray-400'>
        <div className='sm:w-[350px] w-[250px] bg-white my-auto mb-5 sm:mb-0'>
          <img src={image} alt="" className='mx-auto h-fit' />
        </div>

        <div className='w-full text-center sm:text-start'>
          <div className='border-b-1 pb-5 border-gray-400 space-y-2'>
            <h2 className='text-3xl font-bold'>{title}</h2>
            <h3 className='text-xl text-gray-500'>
              Developed By : <span className='text-blue-600 font-bold'>{companyName}</span>
            </h3>
          </div>

          <div>
            <div className="stats flex flex-col sm:flex-row sm:justify-between mx-auto sm:mx-0 gap-4 sm:gap-0 w-6/12">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src={download} alt="" className="w-8 h-8" />
                </div>
                <div className="stat-title">Downloads</div>
                <div className="stat-value">{downloads}M</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src={star} alt="" className="w-8 h-8" />
                </div>
                <div className="stat-title">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <img src={review} alt="" className="w-8 h-8" />
                </div>
                <div className="stat-title">Total Reviews</div>
                <div className="stat-value">{reviews}K</div>
              </div>
            </div>

            <div className='flex flex-wrap justify-center sm:justify-start items-center gap-5'>
              {downloaded ? (
                <button
                  className="btn border-0 bg-red-500 text-white text-xl font-semibold px-8 py-7 rounded-xl cursor-not-allowed flex items-center gap-2"
                >
                  <CheckCircle size={20} />
                  Installed
                </button>
              ) : (
                <button
                  onClick={() => handleInstallList(id)}
                  className="btn border-0 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-xl font-semibold px-8 py-7 rounded-xl hover:from-[#9F62F2] hover:to-[#632EE3] flex items-center gap-2"
                >
                  <Download />
                  Install Now ({size}MB)
                </button>
              )}

              <button
                onClick={() => navigate(-1)}
                className='btn border-0 bg-[#632EE3] text-white text-xl font-semibold px-8 py-7 rounded-xl hover:bg-[#9F62F2] flex items-center gap-2'>
                Go Back <ArrowLeftToLine />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppRatingsGraph ratings={ratings}></AppRatingsGraph>

      <div className='border-t-1 pt-5 border-gray-400'>
        <h1 className="text-2xl font-semibold mb-4 px-5 sm:px-0">Description</h1>
        <p className='text-lg text-gray-500 text-center px-5 sm:text-start sm:px-0'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
