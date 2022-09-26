import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

const ItemDetail = ({ data }) => {
  const [terminarCompra, setTerminarCompra] = useState(false);
  const comprar = () => {
    setTerminarCompra(true);
  };
  return (
    <div className="detail">
      <h1>{data.nombre}</h1>
      <img src={data.photo} alt="" />
      <h3>Precio : {data.precio}</h3>
      <p>{data.descripcion}</p>
      {terminarCompra ? (
        <div>
          <Link to="/cart/">
            <button>Terminar compra</button>
          </Link>
          <Link to="/catalogo/">
            <button>Seguir comprando</button>
          </Link>
        </div>
      ) : (
        <ItemCount initial={0} stock={5} onAdd={comprar} />
      )}
    </div>
  );
};

export default ItemDetail;
