import React from 'react';

const AddToCart = ({cartItems}) => {
    return (
        <div className='cart-items'>
            <div className='cart-items-header'>
            Added cart

            {cartItems.length ===0 && (<div>No Items added</div>)}

          <div>
            {cartItems.map(item=>(<div key={item.id} className='cart-items-list'>
            <img src={item.image} alt='' />
            </div>) )}
          </div>

            </div>
        </div>
    );
};

export default AddToCart;