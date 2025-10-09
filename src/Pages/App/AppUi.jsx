import useApps from '../../Hooks/useApps';
import { Download, SearchIcon } from 'lucide-react';
import { Link } from 'react-router';
import halfstar from "../../assets/halfstar.png";
import { useContext, useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';
import { installContext } from '../../Roots/RootLayouts/RootLayouts';

const AppUi = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const { showLoading, setShowLoading } = useContext(installContext);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
  }, [setShowLoading]);


  useEffect(() => {
    if (!loading) {
      const delay = setTimeout(() => setShowLoading(false), 300);
      return () => clearTimeout(delay);
    }
  }, [loading, setShowLoading]);

  if (showLoading) {
    return <Loading />;
  }

  const handleTerm = search.trim().toLowerCase();
  const searchedApp = handleTerm
    ? apps.filter(app => app.title.toLowerCase().includes(handleTerm))
    : apps;

  return (
    <div className="py-20">
      <div className="text-center space-y-2.5">
        <h1 className="text-5xl font-semibold">Our All Applications</h1>
        <p className="sm:px-0 px-2.5 text-xl text-gray-500">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col items-center mt-3.5 px-4 sm:flex-row sm:justify-between gap-3 sm:gap-0">
        <h1 className="sm:block hidden text-2xl font-bold">
          ({searchedApp.length}) Apps Found
        </h1>

        <div className="w-64 sm:w-80">
          <label className="relative block bg-white border border-gray-300 rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 overflow-hidden">
            {/* Search Icon */}
            <span className="absolute top-4 left-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>

            <input
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              type="search"
              placeholder="Search"
              required
              className="w-full py-3 pl-10 pr-4 text-lg text-gray-800 placeholder-gray-400 focus:outline-none"
            />
          </label>
        </div>

        <h1 className="sm:hidden block text-2xl font-bold">
          ({searchedApp.length}) Apps Found
        </h1>
      </div>

      {/* App Card Section */}
      <div className="min-h-[300px]">
        {searchLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loading />
          </div>
        ) : searchedApp.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-16">
            <SearchIcon className="w-16 h-16 text-gray-300 mb-4" />
            <h2 className="text-center text-gray-500 text-xl sm:text-2xl font-medium">
              No results here.
            </h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Try a different keyword to discover amazing apps!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 px-4">
            {searchedApp.map((app) => (
              <Link key={app.id} to={`/app-details/${app.id}`}>
                <div className="card bg-white shadow-lg hover:shadow-2xl rounded-2xl overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-purple-300 border-1 border-gray-300">
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
                      <img className="w-5" src={halfstar} alt="" />
                      <p className="font-medium text-lg">{app.ratingAvg}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AppUi;
