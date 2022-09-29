import React, { useState,useEffect } from 'react';
import BreakTime from '../BreakTime/BreakTime';
import FitnessTour from '../FitnessTime/FitnessTour';
import Profile from '../Profile/Profile';

const Siderbar = ({timeNeed}) => {
    const [breakTime , setBreakTime] = useState("");
    const [firstOne, setFirstOne] = useState("5")
    const [secondOne, setSecondOne] = useState("10")
    const [thirdOne, setThridtOne] = useState("15")
    const [fourthOne, setFourthOne] = useState("25")
    const [fifthOne, setFifthOne] = useState("35")

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("time"));
        if (data) {
            setBreakTime(data);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem("time", JSON.stringify(breakTime));
      }, [breakTime]);

      const settoBreakTime = (id) => {
        const setThetime = [id];
        setBreakTime(setThetime)
      }

    return (
        <div className='card'>
            <Profile />
            <BreakTime  firstOne={firstOne} secondOne={secondOne} thirdOne={thirdOne} fourthOne={fourthOne}
                fifthOne={fifthOne} settoBreakTime={settoBreakTime}
            />
            <FitnessTour timeNeed={timeNeed} breakTime={breakTime}/>
        </div>
    );
};

export default Siderbar;