import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import juegos from "../../../app/Productos";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(juegos);
      }, 1000);
    });
    getData.then((res) => setData(res.find((juego) => juego.id === parseInt(detalleId))));
  }, [detalleId]);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
