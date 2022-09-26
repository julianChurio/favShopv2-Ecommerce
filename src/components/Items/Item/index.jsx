import React from "react";
import { Link } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="itemsJuegos">
      <h1 style={{textAlign: "center"}}>{info.nombre}</h1>
      <img src={info.photo} alt="" />
      <Link to={`/categoria/productos/detalles/${info.id}`}>
        <button>Ver Info</button>
      </Link>
    </div>
  );
};

export default Item;
