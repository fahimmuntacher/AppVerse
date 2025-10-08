import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';

const AppDetails = () => {
    const {id} = useParams();
    const idNum = parseInt(id);
    const {apps, loading, error} = useApps();
    console.log(apps);
    
    return (        
        <div>
            <h1>This is App Details</h1>
        </div>
    );
};

export default AppDetails;      