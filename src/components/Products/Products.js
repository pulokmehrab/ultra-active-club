import React from 'react';
import './Products.css'

const Products = (props) => {
 const {name, price} =props.Product;

    return (
        <div>
            <h2>name:{name}</h2>
            <p>price:{price}</p>
        </div>
    );
};

export default Products;