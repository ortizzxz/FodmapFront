import React from 'react';
import '../styles/App.css'
import '../styles/App2.css'

export const CategoriaFilter = ({ setSelectedGroup }) => {
    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    return (
        <div className='grupoFiltro'>
            <select onChange={handleGroupChange}>
                <option value="">Todas las categorías</option>
                <option value="carbohidratos">Frutas y Verduras</option>
                <option value="proteina">Proteínas</option>
                <option value="grasas">Grasas</option>
            </select>
        </div>
    );
};
