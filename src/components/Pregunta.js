import React, {Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = () => {

    // Definir el State
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    // Función que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value,10))
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad)) {
            guardarError(true)
            return
        }

        // Si se pasa la validación
        guardarError(false)
    }

    return (
        <Fragment>
            <h2>Coloca un presupuesto</h2>

            { error ? <Error mensaje="El presupuesto es incorrecto"/> : null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca un presupuesto"
                onChange={definirPresupuesto}
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                 />
            </form>
        </Fragment>
    )
}

export default Pregunta
