import { CardAlumno } from "../components";

function ListDemo(){
    const lista_de_compras = [
        "Pollo",
        "Chelas",
        "Arroz",
        "Verdura",
        "Torres",
        "Papas",
        "Cheetos Flaming",
      ];
      const alumnos = [
        {
          name: "Dylan",
          age: 30,
          hobby: "comer",
        },
        {
          name: "David",
          age: 27,
          hobby: "beber",
        },
    
        {
          name: "Diego",
          age: "23",
          hobby: "Games",
        },
    
        {
          name: "Jose Luis",
          age: 31,
          hobby: "Tenis",
        },
    
        {
          name: "Cristian Gomez",
          age: 36,
          hobby: "Deporte",
        },
      ];
    return(
        <>
              <h1>Listas</h1>
      <ul>
        <li>Pollo</li>
        <li>Verdura</li>
        <li>Papas</li>
        <li>Chelas</li>
      </ul>

      <h2>Lista dinamica</h2>
      {/*  map  
    
      const lista_de_compras = ["Pollo","Chelas","Arroz","Verdura","Torres","Papas"]

    */}

      <ul>
        {lista_de_compras.map((item, index) => (
          <li
            //En la etiqueta contenedora (Wrap)
            //se agrega key={}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>

      <h2>Lista de Alumnos</h2>

      {alumnos.map((alumno, index_alumno) => (
        <CardAlumno
          key={index_alumno}
          name={alumno.name}
          age={alumno.age}
          hobby={alumno.hobby}
          //{...alumno} este es mucho mejor
        />
      ))}
        
        </>
    )
}


export default ListDemo