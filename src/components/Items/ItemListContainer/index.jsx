import React, {useState, useEffect} from "react";
import juegos from "../../../app/Productos";
import ItemList from "../ItemList";

const ItemListContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = new Promise(resolve =>  {
      setTimeout(() => {
        resolve(juegos)
      }, 1000);
    })
    getData.then(res => setData(res))
  }, [])

  return (
    <div className="juegos">
      <ItemList  data={data}/>
    </div>
  );
};

export default ItemListContainer;
