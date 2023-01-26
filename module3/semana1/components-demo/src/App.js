import './App.css';
import { Navbar, CardProfile } from './components';


function App() {


  const TagWhitChildren = ({...props})=>{
    console.log("el children?",props)
    return (
      <div>
        {props.children}
      </div>
    )
  }
  return (
    <div className="App">
      <Navbar
        user={false}
        //ejemplos de valores para props
        functionDemo={()=>{}}
        text={"Texto"}
        numbers={1084}
        boolean={false}
        arrays={[0,1,2,3]}
        obj={ {name:"Dylan",hobby:"Bailar"} }
      />
      
      <CardProfile 
        nameDemo="Dylan" 
        hobby="Juegos de mesa" 
        />

      <CardProfile 
        nameDemo="Kain Mas guapo" 
        hobby="Cosas de Vikingo" 
        />
        <CardProfile 
        nameDemo="Roberto" 
        hobby="Craneos" 
        />

        <TagWhitChildren>
          <h1>Este es el Children</h1>
           <em>Perros</em>
        </TagWhitChildren>
    </div>
  );
}

export default App;


