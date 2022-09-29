import React from 'react';
import dp from './final-1.png'

const Profile = () => {
    return (
        <div>
            <div className='card text-center rounded p-4'>
                <div className='d-flex justify-content-center'>
                    <img src={dp} className='img-fluid w-25 h-25' alt=''/>
                </div>
                <h4>Jhon Doe</h4>
                <h4>Weight: 80kg</h4>
                <h4>Height: 6 feet</h4>
                <h4>Chmapionship: 2</h4>
            </div>
        </div>
    );
};

export default Profile;