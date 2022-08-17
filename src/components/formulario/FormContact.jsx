import "./formcontact.css";
import React from "react";

export default function FormContact(props) {
    const[dataUser, setDataUser] = React.useState({
        nombre: "",
        email: "",
        telefono: ""
    });  

    function handleSubmit(event){
        event.preventDefault();
        console.log("submit");
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
                <div>
                    <button
                        className="btn-submit" 
                        type="submit"     
                    >enviar</button>
                    <button 
                        className="btn-submit" 
                        type="reset"      
                    >cancelar</button>
                </div>
            </form>
        </section>
    )
}