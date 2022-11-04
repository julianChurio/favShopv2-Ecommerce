import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { detalleId } = useParams();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "productos", detalleId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [detalleId]);

  if (loading) return <>Cargando...</>;

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
