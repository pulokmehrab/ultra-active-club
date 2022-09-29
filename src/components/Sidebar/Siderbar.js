import React from 'react';
import BreakTime from '../BreakTime/BreakTime';
import FitnessTour from '../FitnessTime/FitnessTour';
import Profile from '../Profile/Profile';

const Siderbar = () => {
    return (
        <div className='card'>
            <Profile />
            <BreakTime />
            <FitnessTour />
        </div>
    );
};

export default Siderbar;