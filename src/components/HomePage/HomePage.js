import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import QandA from '../QandA/QandA';
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
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                    <h2 className='text-center'>
                        HomePage
                    </h2>
                        <div className='row'>
                            {data.map(dataValue => <Card key={dataValue.id} card={dataValue} addTime={addTime} /> )}
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <h3 className='text-center'>Side section</h3>
                        <Siderbar timeNeed={timeNeed}/>
                    </div>
                    <QandA/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;