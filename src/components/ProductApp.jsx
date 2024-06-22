import { useState } from 'react';
import { findAll } from '../services/foodService';
import '../styles/App.css'
import '../styles/App2.css'
import { FoodSearcher } from './FoodSearcher'
import { useEffect } from 'react';

export const ProductApp = () => {

    const[alimentos, setAlimentos] = useState([]);
    
    const getFood = async () => {
        const result = await findAll();

        setAlimentos(result.data._embedded.alimentoes); // nombre de la tabla, no de la entidad.
    };

    useEffect( () => {
        getFood();
    }, []);


    return (
        <div className='container'>
            <div>
                <h1>Búsqueda de Alimentos FODMAP</h1>
            </div>
            
            <div className='legend'>
                <FoodSearcher alimento={alimentos}/>
            </div>
        </div>
    );

}
