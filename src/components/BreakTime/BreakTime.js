import React from 'react';

const BreakTime = () => {
    return (
        <div className='mt-3'>
            <h4 className='text-center'>Breaking Time</h4>
            <div className='card d-flex flex-row align-items-center justify-content-evenly'>
            <button>5s</button>
            <button>10s</button>
            <button>15s</button>
            <button>25s</button>
            <button>35s</button>
        </div>
        </div>
    );
};

export default BreakTime;