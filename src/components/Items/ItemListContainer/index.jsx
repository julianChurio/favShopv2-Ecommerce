import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./index.css";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  // data que voy a setear trayendo los datos de algun lado (otro js o firestore como ahora)
  const { detalleId } = useParams(); // detalleId

  useEffect(() => {
    const Firestore = getFirestore(); // llamo al firestore
    const Coleccion = collection(Firestore, "productos"); // llamo a la coleccion "productos" de firestore
    if (detalleId) {
      // si detalleId existe
      const filtrarColeccion = query(Coleccion, where("id", "===", detalleId));
      getDocs(filtrarColeccion).then((res) =>
        setData(res.docs.map((producto) => ({ id: producto.id, ...producto.data() })))
      );
    } else
      getDocs(Coleccion).then((res) =>
        setData(res.docs.map((producto) => ({ id: producto.id, ...producto.data() })))
      );
  }, [detalleId]);

  return (
    <div className="juegos">
      {/* traigo el componente ItemList con data, que es igual a data (nuestros items) que traemos de firestore aca */}
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
