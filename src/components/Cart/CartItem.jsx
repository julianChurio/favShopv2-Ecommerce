import React from "react";
import { useCartContext } from "./../../CartProvider";

const CartItem = ({ product }) => {
  const { removerProducto } = useCartContext();
  if(product.precio === "Gratis") {
    product.precio = 0
  }

  return (
    <div>
      <img src={product.photo} alt="" />
      <div>
        <h1>Titulo : {product.nombre}</h1>
        <p>Cantidad: {product.cantidad}</p>
        <p>Precio : {product.precio}</p>
        <p>Subtotal : ${product.cantidad * product.precio}</p>
        <button onClick={() => removerProducto(product.id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
