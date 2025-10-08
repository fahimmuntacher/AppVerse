import React from 'react';
import AppUi from './AppUi';
import useApps from '../../Hooks/useApps';
import Loading from '../../Components/Loading/Loading';

const App = () => {
    const {loading} = useApps()
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div className='max-w-[1440px] mx-auto'>
            <AppUi></AppUi>
        </div>
    );
};

export default App;