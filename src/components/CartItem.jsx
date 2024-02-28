import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';

const CartItem = ({ id, title, price, quantity }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeFromCart({ id }));
    };

    const handleQuantityChange = e => {
        const newQuantity = parseInt(e.target.value);
        dispatch(updateQuantity({ id, quantity: newQuantity }));
    };

    return (
        <div className="cart-item">
            <h3>{title}</h3>
            <p>Price: ${price}</p>
            <p>
                Quantity:
                <input type="number" value={quantity} onChange={handleQuantityChange} />
            </p>
            <button onClick={handleRemove}>Remove</button>
        </div>
    );
};

export default CartItem;
