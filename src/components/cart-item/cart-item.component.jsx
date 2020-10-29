import React from 'react';

import './cart-item.style.scss';

const CartItem = ({ item: {imageUrl,name, price, quantity} }) => (
    <div className="cart-item">
        <img src={imageUrl} alt='name'></img>
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='name'>{quantity} X ${price}</span>
        </div>
    </div>
)

export default CartItem;