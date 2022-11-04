import { React, useRef, useEffect } from "react";
import Cart from "../../assets/images/shopping-cart.png";
import { NavLink } from "react-router-dom";
import { useCartContext } from "./../../CartProvider";
import "./index.css";

const CartWidget = () => {
  const { totalProductos, totalNumero } = useCartContext();

  // traigo estos del cart context

  const nuevoRef = useRef(null);

  let cartSpan = "cartSpan";

  useEffect(() => {
    const spanCarrito = nuevoRef.current;
    if (totalNumero === 0) {
      spanCarrito.className = "none";
    }
    if (totalNumero !== 0) {
      spanCarrito.className = "cartSpan";
    }
  }, [totalNumero]);

  return (
    <>
      <NavLink to="/cart/">
        <span className={cartSpan} ref={nuevoRef}>
          {totalProductos() || ""}
        </span>
        <img src={Cart} alt="carrito" className="cartWidget" />
      </NavLink>
    </>
  );
};

export default CartWidget;
