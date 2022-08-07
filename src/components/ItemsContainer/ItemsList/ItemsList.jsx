import React from "react";
import Items from "../Items/Items.jsx";
function ItemsList(props) {
  return (
    <div >
        {props.data.map((planta) =>   
            <Items
              key={planta.id}
              name={planta.name}
              description={planta.description}
              precio={planta.precio}
              img={planta.img}
              stock={planta.stock}
            />
        )}
    </div>
  );
}
export default ItemsList;