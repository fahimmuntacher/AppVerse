import { Download, MoveRight, StarHalf } from "lucide-react";
import useApps from "../../Hooks/useApps";
import { Link } from "react-router";
import halfStar from "../../assets/halfstar.png"

const TrendingApp = () => {
    const {apps, loading, error} = useApps();
    const trendingApps = apps.slice(0,8)
    return (
        
        <div className="py-15 max-w-[1440px] mx-auto">
            <div className="text-center space-y-2.5">
                <h1 className="text-5xl font-semibold">Trending Apps</h1>
                <p className="sm:px-0 px-2.5 text-xl text-gray-500">Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-4">
                {
                    trendingApps.map(app => 
                    <Link to= {`/app-details/${app.id}`}>
                        <div className="card bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col">
                    <figure className="px-6 pt-6">
                        <img
                        src={app.image}
                        alt={app.title}
                        className="rounded-xl w-full max-h-48 object-contain mx-auto"
                        />
                    </figure>

                    <div className="card-body text-center flex-1">
                        <h2 className="card-title text-xl font-semibold text-gray-800 mb-2">
                        {app.title}
                        </h2>
                    </div>

                    <div className="flex justify-between items-center px-6 py-4 border-t border-gray-200 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                        <Download className="text-blue-500" size={18} />
                        <p className="font-medium text-lg">{app.downloads}M</p>
                        </div>
                        <div className="flex items-center gap-2">
                        <img src={halfStar} className="w-5" alt="" />
                        <p className="font-medium text-lg">{app.ratingAvg}</p>
                        </div>
                    </div>
                    </div>
                    </Link>

                    )

                }
            </div>

            <div className="flex justify-center">
                <Link to="/apps">
                    <button className="btn border-0 bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white text-lg px-8 py-7 rounded-xl hover:bg-gradient-to-br hover:from-[#9F62F2] hover:to-[#632EE3]">Show All <MoveRight></MoveRight></button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApp;