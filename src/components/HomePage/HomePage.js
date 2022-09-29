import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Siderbar from '../Sidebar/Siderbar';

const HomePage = () => {
    const [data,setData]= useState([])

    const [timeNeed,setTimeNeed] = useState([]);

    const fetching = async () => {
        const url = `data.json`;
        const res = await fetch(url);
        const data = await res.json();
        setData(data);    
    }

    useEffect(()=> {
        fetching();
    },[]);

    const addTime = (data) => {
        const remainigTime = [...timeNeed,data];
        setTimeNeed(remainigTime);
    }

    return (
        <div>
            <h2>
                homw pAGE
            </h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='row'>
                            {data.map(dataValue => <Card key={dataValue.id} card={dataValue} addTime={addTime} /> )}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h3>side section</h3>
                        <Siderbar timeNeed={timeNeed}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;