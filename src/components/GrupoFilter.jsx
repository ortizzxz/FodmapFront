import React from 'react';
import '../styles/App.css'
import '../styles/App2.css'

export const GrupoFilter = ({ setSelectedGroup }) => {
    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    return (
        <div className='grupoFiltro'>
            <select onChange={handleGroupChange}>
                <option value="">Todos los grupos</option>
                <option value="Grupo1">Carbohidratos</option>
                <option value="Grupo2">Proteínas</option>
                <option value="Grupo3">Grasas</option>
            </select>
        </div>
    );
};
