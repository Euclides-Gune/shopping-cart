import React, {useContext} from "react";
import { CiShoppingCart } from "react-icons/ci";
import './cartbutton.css';
import AppContext from "../../context/AppContext";

const CartButton = () => {

  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return(
    <button type="button" className="cart__button"
    onClick={ () => {
      if(isCartVisible)
        setIsCartVisible(false)
      else
        setIsCartVisible(true)
    } }
    >
      <CiShoppingCart />
      <span className="cart-status">{cartItems.length}</span>
    </button>
  );
} 

export default CartButton;