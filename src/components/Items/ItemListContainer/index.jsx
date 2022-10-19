import React, { useState, useEffect } from "react";
import ItemList from "../ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./index.css"

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { detalleId } = useParams();

  useEffect(() => {
    const Firestore = getFirestore();
    const Coleccion = collection(Firestore, "productos");
    if (detalleId) {
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
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
