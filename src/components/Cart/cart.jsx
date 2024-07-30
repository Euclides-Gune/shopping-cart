import React from "react";
import './cart.css';
import CartItem from "../CartItme/cartItem";
import AppContext from "../../context/AppContext";
import { useContext } from 'react';
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {

  const { cartItems, isCartVisible } = useContext(AppContext);
  const totalPrice  = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return(
    <section className={`cart ${isCartVisible ? `cart-active` : ''}`}>
      <div className="cart-items">
        {
          cartItems.map(cartItem => <CartItem key={cartItem.id} data={cartItem} />)
        }
      </div>
      <div className="cart-resume">
        {formatCurrency(totalPrice, 'BRL'
        )}
      </div>
    </section>
  );
}

export default Cart;