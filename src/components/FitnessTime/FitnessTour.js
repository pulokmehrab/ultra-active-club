import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FitnessTour = ({timeNeed, breakTime}) => {
    let prevValue = 0;
    for (const time of timeNeed){
        prevValue += parseInt([time]);
    }

    const notify = () => toast("Activity done");

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
            <button onClick={notify} className='btn btn-primary'>Acitivity Check</button>
            <ToastContainer />
        </div>
    );
};

export default FitnessTour;