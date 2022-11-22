import React from 'react';
import { AiFillPlusCircle} from 'react-icons/ai';
import { AiFillMinusSquare} from 'react-icons/ai';
import './AddToCart.css'


const AddToCart = ({cartItems , handleAddProducts , handleRemove}) => {
    const totalPrice = cartItems.reduce((price,item)=> price + item.quantity * item.price , 0 )
    return (
        <div className='cart-items text-black'>
           
          <div className='flex justify-center font-semibold text-xl py-3 border-b-2 border-black'>  Added Item cart</div>

            {cartItems.length ===0 && (<div className='text-2xl font-bold flex justify-center'>No Items added</div>)}

          <div >
            {cartItems.map(item=>(<div key={item.id} className='flex p-2  items-center lg:pl-5 py-2 lg:py-5 lg:ml-10 '>
            <div className='lg:w-64 w-28'> <img className='lg:w-32 w-20 lg:h-28 h-20' src={item.image} alt={item.name} /> </div>
            <div className='font-bold lg:text-2xl text-lg lg:w-32 w-20'> 
             {item.name}
             </div>
            <div className='lg:w-32 w-20'>
                <button className=' lg:text-2xl text-lg mx-1' onClick={()=>handleAddProducts(item)} >
                    <AiFillPlusCircle />
                </button>
                <button className='lg:text-2xl text-lg mx-1' onClick={()=>handleRemove(item)} >
                    <AiFillMinusSquare />
                </button>
            </div>

          <div className='font-bold lg:w-32 w-16 '>
            {item.quantity} * ${item.price}
          </div>

            </div>
            
            ) )}
  
  

          </div>
          <div className='lg:pl-14 pl-2 py-3 border-t-2 border-black font-bold text-xl'>Total price: 
         ${totalPrice} 
  </div>

            </div>
       
    );
};

export default AddToCart;