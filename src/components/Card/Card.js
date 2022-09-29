import React from 'react';

const Card = ({card}) => {
    return (
        <div className='col-lg-6'>
           <div className="card">
                <img src={card.picture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{card.name}</h5>
                    <p className="card-text">{card.time}</p>
                    <a  className="btn btn-primary">Take this</a>
                </div>
            </div>
 
        </div>
    );
};

export default Card;