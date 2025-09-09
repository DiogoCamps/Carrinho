// src/components/CartItem.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
    const { addToCart, removeFromCart } = useCart();

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.title} />
            <div>
                <h4>{item.title}</h4>
                <p>Preço: R$ {item.price.toFixed(2)}</p>
                <p>Quantidade: {item.quantity}</p>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => removeFromCart(item)}>-</button>
            </div>
        </div>
    );
};

export default CartItem;