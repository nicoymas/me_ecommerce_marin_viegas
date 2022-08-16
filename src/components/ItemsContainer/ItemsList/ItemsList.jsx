import React from "react";
import Items from "../Items/Items.jsx";
function ItemsList(props) {
  
  return (
    <div >
        {props.data.map((planta) =>   
            
            <Items
              key={planta.id}
              id={planta.id}
              items={planta}
            />
        )}
    </div>
  );
}
export default ItemsList;