import React from "react";
import Cart from "../../assets/images/shopping-cart.png";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <NavLink to="/cart/">
        <img src={Cart} alt="carrito" className="cartWidget" />
      </NavLink>
    </>
  );
};

export default CartWidget;
