import React from 'react';

const Card = ({card , addTime}) => {
    return (
        <div className='col-lg-6'>
           <div className="card">
                <img src={card.picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 clas
                    sName="card-title">{card.name}</h5>
                    <p className="card-text">{card.time}</p>
                    <button onClick={() => addTime(card.time)}  className="btn btn-primary">Take this</button>
                </div>
            </div>
 
        </div>
    );
};

export default Card;