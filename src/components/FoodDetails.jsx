

export const FoodDetails = ({alimento}) => {
    return (
        <div className="product">
            <h3>{alimento.nombre}</h3>
            <p>{alimento.indice}</p>
        </div>
    )
}

// PROP TYPE 