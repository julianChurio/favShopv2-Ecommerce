import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { Link } from "react-router-dom";

const Favoritos = () => {
  const { favorito } = useParams();

  useEffect(() => {
    const Firestore = getFirestore();
    const Coleccion = collection(Firestore, "productos");

    const filtrarColeccion = query(Coleccion, where(favorito, "==", true));
    getDocs(filtrarColeccion).then((res) => {
      setFavorito(res.docs.map((producto) => ({ id: producto.id, ...producto.data() })));
    });
  }, [favorito]);

  const [favoritos, setFavorito] = useState([]);
  return (
    <div className="juegos">
      {favoritos.map((favoritos, i) => (
        <div key={i} className="itemsJuegos">
          <h1>{favoritos.nombre}</h1>
          <img src={favoritos.photo} alt="" />
          <h3>AR${favoritos.precio}</h3>
          <button>
            <Link to={`/categoria/productos/detalles/${favoritos.id}`}>Ver Info</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favoritos;
