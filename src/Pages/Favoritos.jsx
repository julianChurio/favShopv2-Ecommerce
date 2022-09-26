import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import juegos from "../app/Productos";

const Favoritos = () => {
  const { favoritos } = useParams();

  useEffect(() => {
    setTimeout(() => {
      setFavorito(juegos.filter((product) => product.favorito === favoritos));
    }, 1000);
  }, [favoritos]);

  const [favorito, setFavorito] = useState([]);
  return (
    <div className="itemDetails">
      {favorito.map((favorito, i) => (
        <div key={i}>
          <h1>{favorito.nombre}</h1>
          <img src={favorito.photo} alt="" />
          <h3>{favorito.precio}</h3>
          <h4>{favorito.descripcion}</h4>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
