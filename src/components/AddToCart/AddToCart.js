import React from 'react';

const AddToCart = ({cartItems , handleAddProducts , handleRemove}) => {
    const totalPrice = cartItems.reduce((price,item)=> price + item.quantity * item.price , 0 )
    return (
        <div className='cart-items'>
            <div className='cart-items-header'>
            Added cart

            {cartItems.length ===0 && (<div>No Items added</div>)}

          <div>
            {cartItems.map(item=>(<div key={item.id} className='cart-items-list'>
            <img src={item.image} alt={item.name} />
            <div> {item.name} </div>
            <div>
                <button onClick={()=>handleAddProducts(item)} >+</button>
                <button onClick={()=>handleRemove(item)} >-</button>
            </div>

          <div>
            {item.quantity} * ${item.price}
          </div>

            </div>
            
            ) )}
  
  <div>total price: 
    <div> ${totalPrice} </div>
  </div>

          </div>

            </div>
        </div>
    );
};

export default AddToCart;