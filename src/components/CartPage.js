import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { selectCartItems } from '../features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector(selectCartItems);

    return (
        <div className="cart-page">
            <h2>Cart</h2>
            {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
    );
};

export default CartPage;
