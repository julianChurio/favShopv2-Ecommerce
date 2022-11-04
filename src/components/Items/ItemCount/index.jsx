import React, { useState, useEffect } from "react";
import { useCartContext } from "./../../../CartProvider";
import "./index.css";
import { toast } from "react-toastify";

const ItemCount = ({ initial, stock, onAdd, id }) => {
  // exporto initial, stock, ondadd e id para usarlo en ItemDetail
  const [count, setCount] = useState(parseInt(initial));

  const notify = () => toast("Ya estás llevando la cantidad máxima");

  const { buscarEnCarrito } = useCartContext();
  // traigo buscarEnCarrito del cart context
  const sumar = () => {
    let cantidadEnCarrito;

    buscarEnCarrito(id) !== undefined
      ? (cantidadEnCarrito = buscarEnCarrito(id).cantidad)
      : (cantidadEnCarrito = 0);
    // si está en el carrito, busco la cantidad
    // si NO esta en el carrito, lo dejo como 0

    /* 1 */ count >= 0 && /* 2 */ count < stock && /* 3 */ count + cantidadEnCarrito < stock
      ? // 1 si la cuenta es mayor o igual que cero
        // 2 y el stock es mayor que la cuenta
        // 3 y la cuenta + cantidadEnCarrito es menos que el stock

        setCount(count + 1) //sumar uno al count
      : notify(); // sino notificar que ya estoy llevando demás
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
