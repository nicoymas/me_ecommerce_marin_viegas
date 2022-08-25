import React from "react";
import Items from "../Items/Items.jsx";
import "./itemlist.css"
function ItemsList(props) {
  
  return (
    <div className="ItemsList" >
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