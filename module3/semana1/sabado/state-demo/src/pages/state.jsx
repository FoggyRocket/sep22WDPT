// para usar el state (Storage del component) debemos de importar el hookt
import { useState } from "react";

function StateDemo() {
  // Apartado para almacenar numeros
  //1)el nombre del apartado para guardar datos
  //2) setALGO se encarga de modificar a su compañero
  const [counter, setCounter] = useState(0);
  //si useState() no cuenta con un dato inicial el valor por defacto es undefined

  // State para el comment
  const [comment, setComment] = useState("");

  const sum = () => {
    setCounter((prevState) => prevState + 1);
    //setAlgo del useState traen un cb
    // para modificar arreglos u objetos
  };
  
  return (
    <>
      <p>El Counter: {counter} </p>
      <button
        // props eventHandling
        onClick={(event) => setCounter(counter - 1)}
      >
        -
      </button>
      <button onClick={sum}>+</button>

      <div>
        <label>Comentario</label>
        <input
          type="text"
          name="comment"
          placeholder="Escribe algo bonito"
          value={comment}
          //handlin event
          onChange={(event) => {
            //este onChange es el encargado de estar espianndo
            // todos los metodos de react(Eventos) responden con un event
            console.log("El evento", event.target.value);
            setComment(event.target.value);
          }}
        />
      </div>
    </>
  );
}

export default StateDemo