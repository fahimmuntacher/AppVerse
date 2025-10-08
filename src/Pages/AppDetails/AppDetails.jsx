import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import download from "../../assets/icon-downloads.png"
import star from "../../assets/icon-ratings.png"
import review from '../../assets/icon-review.png'
import { Download } from 'lucide-react';
import AppRatingsGraph from './AppRatingsGraph';

const AppDetails = () => {
    const {id} = useParams();
    const idNum = parseInt(id);
    const {apps} = useApps();
    const appDetail = apps.find(app => app.id === idNum) || {};

    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings} = appDetail;
    console.log(title);
    
    return (        
        <div className='max-w-[1440px] mx-auto py-15'>
            <div className='flex items-center flex-col sm:flex-row space-y-5 sm:space-x-5 h-fit border-b-1 pb-8 border-gray-400'>
                <div className='sm:w-[350px] w-[250px] bg-white my-auto mb-5 sm:mb-0'>
                    <img src= {image} alt="" 
                    className='mx-auto h-fit'
                    />
                </div>
                <div className='w-full text-center sm:text-start'>
                    {/* app name */}
                    <div className='border-b-1 pb-5 border-gray-400 space-y-2'>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <h3 className='text-xl text-gray-500'>Developed By : <span className='text-blue-600 font-bold'>{companyName}</span></h3>
                    </div>

                    {/* Stats  */}
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
                        <div>
                            <button className="btn border-0 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-xl font-semibold px-8 py-7 rounded-xl hover:bg-gradient-to-br hover:from-[#9F62F2] hover:to-[#632EE3]"><Download></Download>Install Now ({size}MB)</button>    
                        </div>
                    </div>
                </div>
            </div>

            <AppRatingsGraph ratings = {ratings}></AppRatingsGraph>

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