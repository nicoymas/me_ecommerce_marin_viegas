import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider ({children}){
    const[ItemsInCart, setInCart] = useState([]) 
    function isInCart(id){
        return(ItemsInCart.some(itemCart => itemCart.id === id))
    }
    
    function addToCart(item,quantity){
        
        if( isInCart(item.id) ){
        }else{
            let copyCart = [...ItemsInCart]
            copyCart.push ({...item, count :quantity});
            setInCart(copyCart)
        }
    }
    
    const removeItem=(id)=>{
        setInCart(ItemsInCart.filter(itemCart => itemCart.id !== id))
    }
    const Clear= (id)=>{
        setInCart(ItemsInCart.filter(itemCart => itemCart.id === id))
    }
    
    
    
    return(
        <CartContext.Provider value ={{ItemsInCart, addToCart,removeItem,Clear}}>
            {children} 
        </CartContext.Provider>
    )
}