import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";
import { useCartContext } from "../../../CartProvider";
import "./index.css"

const ItemDetail = ({ data }) => {
  const { agregarProducto } = useCartContext();

  const [terminarCompra, setTerminarCompra] = useState(false);

  const comprar = (cantidad) => {
    setTerminarCompra(true);
    agregarProducto(data, cantidad);
  };

  return (
    <div className="detail">
      <img src={data.photoDetail} alt="" className="detailPhoto" />

      <div className="details">
        <h1>{data.nombre}</h1>
        <h3>Precio : AR${data.precio}</h3>
        <p>{data.descripcion}</p>
        {terminarCompra ? (
          <div>
            <Link to="/cart/">
              <button className="boton-solo">Terminar compra</button>
            </Link>
            <Link to="/catalogo/">
              <button className="boton-solo">Seguir comprando</button>
            </Link>
          </div>
        ) : (
          <ItemCount initial={0} stock={5} onAdd={comprar} id={data.id} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
