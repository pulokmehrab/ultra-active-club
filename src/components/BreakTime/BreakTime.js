import React from 'react';

const BreakTime = ({firstOne,secondOne,thirdOne,fourthOne,fifthOne, settoBreakTime}) => {
    return (
        <div className='mt-3'>
            <h4 className='text-center'>Breaking Time</h4>
            <div className='card d-flex flex-row align-items-center justify-content-evenly'>
            <button onClick={() => settoBreakTime(firstOne)}>{firstOne} s</button>
            <button onClick={() => settoBreakTime(secondOne)}>{secondOne} s</button>
            <button onClick={() => settoBreakTime(thirdOne)}>{thirdOne} s</button>
            <button onClick={() => settoBreakTime(fourthOne)}>{fourthOne} s</button>
            <button onClick={() => settoBreakTime(fifthOne)}>{fifthOne} s</button>
        </div>
        </div>
    );
};

export default BreakTime;