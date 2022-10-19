import React, { useState, useEffect } from "react";
import { useCartContext } from "./../../../CartProvider";
import "./index.css";

const ItemCount = ({ initial, stock, onAdd, id }) => {
  const [count, setCount] = useState(parseInt(initial));

  const { buscarEnCarrito } = useCartContext();

  const sumar = () => {
    let cantidadEnCarrito;

    buscarEnCarrito(id) !== undefined ? (cantidadEnCarrito = buscarEnCarrito(id).cantidad) : (cantidadEnCarrito = 0);

    count >= 0 && count < stock && count + cantidadEnCarrito < stock ? setCount(count + 1) : console.log("asd");
  };

  const restar = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div>
      <div className="buttons">
        <button disabled={count === 0} onClick={restar}>
          -
        </button>
        <span>{count}</span>
        <button disabled={count >= stock} onClick={sumar}>
          +
        </button>
      </div>
      <div>
        <button disabled={stock <= 0} onClick={() => onAdd(count)} className="boton-solo">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
