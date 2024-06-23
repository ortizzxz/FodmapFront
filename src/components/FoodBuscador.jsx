import { findAll } from "../services/foodService";
import { useEffect, useState } from "react"


const initialDataForm = {
    nombre: ''
}

export const FoodBuscador = () => {

    const [form, setForm] = useState(initialDataForm);

    const { nombre } = form;


    return(
        <>
        <form onSubmit={(event) => {
            event.preventDefault();

            if (!nombre) {
                return findAll();
            }
            setForm(initialDataForm);
        } } />
        
        <div>
            <input type="text" placeholder="Alimento..." name="nombre" value={nombre} 
            onChange={ (event) => setForm({...form, nombre: event.target.value})}/>
        </div>

        <div>
            <button type="submit">
                {'Buscar'}
            </button>
        </div>
            
        </>
    )
}