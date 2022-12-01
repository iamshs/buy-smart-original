import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { BsArrowLeft} from 'react-icons/bs';
const ProductDetails = () => {
    const {id} = useParams()
    return (
        <div>
             <Link to={'/everything'} > <div className='flex items-center pl-2 pt-5  '>
          <p className='text-lg mr-1 '> <BsArrowLeft/> </p>
          <p className='font-semibold hover:text-teal-900 hover:font-bold'>Continue Shopping</p>
        </div></Link>
         <h2 className='text-2xl py-10'>Product Details: {id} </h2>

        </div>
    );
};

export default ProductDetails;