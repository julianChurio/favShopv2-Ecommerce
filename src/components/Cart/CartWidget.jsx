import React from "react";
import Cart from "../../assets/images/shopping-cart.png";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./../../CartProvider";

const CartWidget = () => {
  const { totalProductos } = useCartContext();
  return (
    <>
      <NavLink to="/cart/">
        <img src={Cart} alt="carrito" className="cartWidget"/>
          <span>{totalProductos()|| ''}</span>

      </NavLink>
    </>
  );
};

export default CartWidget;
