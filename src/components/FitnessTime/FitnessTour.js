import React from 'react';

const FitnessTour = ({timeNeed, breakTime}) => {
    let prevValue = 0;
    for (const time of timeNeed){
        prevValue += parseInt([time]);
    }
    return (
        <div className='card mt-4 text-center'>
            <div className='mt-3'>
                <h4>total Time</h4>
                <h4>{prevValue} s</h4>
            </div>
            <div  className='mt-3'>
                <h4>Break Time</h4>
                <h4>{breakTime} s</h4>
            </div>
            <button className='btn btn-primary'>Acitivity Check</button>
        </div>
    );
};

export default FitnessTour;