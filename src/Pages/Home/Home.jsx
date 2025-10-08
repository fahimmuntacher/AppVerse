import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useApps from '../../Hooks/useApps';
import TrendingApp from '../../Components/TrendingApp/TrendingApp';

const Home = () => {
    const data = useApps();
    console.log(data);
    return (
        <div>
            <Banner></Banner>
            <TrendingApp></TrendingApp>
        </div>
    );
};

export default Home;