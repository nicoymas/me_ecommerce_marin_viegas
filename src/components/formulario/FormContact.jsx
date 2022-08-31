import "./formcontact.css";
import React ,{useState, useContext}from "react";
import {CartContext} from "../../context/CartContext";

import { collection, addDoc} from "firebase/firestore";
import database from "../../services/firebase";
import Swal from 'sweetalert2'


export default function FormContact({totalcart,datacart}) {
    const[dataUser, setDataUser] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });  

    
    const [ordenId, setOrdenId] = useState(false)
    
    const ordenDeCompra ={
        buyer:{...dataUser},
        items:[...datacart],
        total: totalcart,
        date:new Date()    
    }

    const{Clear}=useContext(CartContext)

    async function handleSubmit(event){
        

        event.preventDefault();
        const colectionBuy= collection(database, "ordenDeCompra")
        const documentoRef= await addDoc(colectionBuy, ordenDeCompra)
        setOrdenId(documentoRef.id)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su compra a sido exitosa',
            showConfirmButton: Clear(CartContext),
            timer: 1000
          })
    }


    function InputChangeHandler(event){
        const dataInput = event.target;
        const Value =dataInput.value;
        const InputName =dataInput.name;

        let copiUserData = {...dataUser};
        copiUserData[InputName] = Value;
        setDataUser(copiUserData);
    }
    function handleReset(event){
        event.preventDefault();
        setDataUser({
            nombre: "",
            email: "",
            telefono: ""
        });
    }  
    
    if(ordenId ){
        return(
        <div> <h1> gracias por tu compra</h1></div>
    )}else{   
        return(
            <section className="form-contact">
                <form onReset={handleReset}onSubmit={handleSubmit}> 
                    <h4 className="form-contact-title">Contactenos</h4>
                    <input 
                        onChange={InputChangeHandler }
                        className="datos" 
                        value={dataUser.nombre}
                        type="text" 
                        name="nombre"  
                        placeholder="Igrese su nombre"
                    />
                    <input 
                        onChange={InputChangeHandler }
                        className="datos" 
                        value={dataUser.email}
                        type="text" 
                        name="email"  
                        placeholder="Igrese su email"
                    />
                    <input 
                        onChange={InputChangeHandler }
                        className="datos" 
                        value={dataUser.telefono}
                        type="telefono" 
                        name="telefono"  
                        placeholder="Igrese su telefono"
                    />
                    <>
                        <button
                            className="btn-submit" 
                            type="submit"     
                        >enviar</button>
                        <button 
                            className="btn-submit" 
                            type="reset"      
                        >cancelar</button>
                    </>
                </form>
            </section>
        )   
    }
}