import React,{useState} from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

const App = () => {

  // Definir el State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mortrarpregunta, actualizarPregunta] = useState(true);


  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>

        <div className="contenido-principal contenido">

          {mortrarpregunta ? 
            (         
              <Pregunta
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
              />
            ) : 
            (
              <div className="row">
                <div className="one-half column">
                  <Formulario/>
                </div>
                <div className="one-half column">
                  2
                </div>
            </div>
            )}

        </div>
      </header>
    </div>
  )
}

export default App

