import React from "react";
import Item from "../Item/index";

const ItemList = ({ data }) => {
  // exporto data para usar en ItemListContainer

  return data.map((juego) => <Item key={juego.id} info={juego} />);
};

export default ItemList;
