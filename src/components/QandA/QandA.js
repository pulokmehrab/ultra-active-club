import React from 'react';

const QandA = () => {
    return (
        <div className='col-lg-6 mt-4'>
            <h2 className='text-center'>Q and A</h2>
            <div className='card p-3'>
                <h3 className='mt-2'>How React work?</h3>
                <p className='mt-2'>Think of your HTML code as a tree. In fact, that is exactly how the browser treats your DOM (your rendered HTML on the browser). React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred</p>
            </div>
            <div className='card p-3'>
                <h4 className='mt-2'>Differences between props vs state?</h4>
                <p className='mt-2'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div className='card p-3'>
                <h4 className='mt-2'>what is the usecases of useEffect?</h4>
                <p className='mt-2'>What does useEffect do? By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.</p>
            </div>
        </div>
    );
};

export default QandA;