

export const FoodDetails = ({ alimento }) => {
    const getIndiceClass = (indice) => {
        switch (indice.toLowerCase()) {
            case 'alto':
                return 'high';
            case 'medio':
                return 'medium';
            case 'bajo':
                return 'low';
            default:
                return '';
        }
    };

    return (
        <div className={`product ${getIndiceClass(alimento.indice)}`}>
            <h3>{alimento.nombre}</h3>
            <p>{alimento.indice}</p>
        </div>
    );
};

// PROP TYPE 