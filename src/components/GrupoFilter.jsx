import React from 'react';

export const GrupoFilter = ({ setSelectedGroup }) => {
    const handleGroupChange = (event) => {
        setSelectedGroup(event.target.value);
    };

    return (
        <select onChange={handleGroupChange}>
            <option value="">Todos los grupos</option>
            <option value="Grupo1">Carbohidratos</option>
            <option value="Grupo2">Proteínas</option>
            <option value="Grupo3">Grasas</option>
        </select>
    );
};
