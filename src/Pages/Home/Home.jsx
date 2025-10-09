import React, { useContext, useEffect } from 'react';
import Banner from '../../Components/Banner/Banner';
import useApps from '../../Hooks/useApps';
import TrendingApp from '../../Components/TrendingApp/TrendingApp';
import Loading from '../../Components/Loading/Loading';
import { installContext } from '../../Roots/RootLayouts/RootLayouts';


const Home = () => {
    const {loading} = useApps();
    const { showLoading, setShowLoading } = useContext(installContext);
    useEffect(() => {
        if (!loading) {
            const delay = setTimeout(() => {
                setShowLoading(false);
            }, 800);
            return () => clearTimeout(delay);
        }
    }, [setShowLoading, loading]);

    if (loading || showLoading) {
        return <Loading />;
    }

    if(loading){
        return <Loading></Loading>
    }


    return (
        <div>
           <Banner></Banner>
            <TrendingApp></TrendingApp>  
        </div>
    );
};

export default Home;