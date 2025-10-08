import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useApps from '../../Hooks/useApps';
import TrendingApp from '../../Components/TrendingApp/TrendingApp';
import Loading from '../../Components/Loading/Loading';


const Home = () => {
    const {loading} = useApps()
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