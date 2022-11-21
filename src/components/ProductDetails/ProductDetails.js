import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
    const {id} = useParams()
    return (
        <div>
         <h2 className='text-2xl py-10'>Product Details: {id} </h2>

        </div>
    );
};

export default ProductDetails;