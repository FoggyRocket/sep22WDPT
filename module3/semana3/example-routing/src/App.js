import './App.css';
import Signup from './pages/Signup'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile';
import { Routes,Route} from "react-router-dom"
import MovieDetail from './pages/MovieDetail';
function App() {
  console.log("Estoy en el app")
  return (
    <div className="App">
      {/* Routes es el papá de Route esta escuchando a la url 
          cada vez que cambia
          Route es hijo encargado de renderizar toda nuestra seccion o pagina
       */}
    <Navbar/>
    {/* Si  no tengo una ruta declarada dentro de Routes en un Route path me mandara
      a un lugar en blanco eso en pocas palabras es 404 NOT FOUND
    */}
    <Routes>
        

        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile user={{}}/>}/>
        <Route path="/movieDetail/:movieId" element={<MovieDetail/>}   />
        {/* 404 (*) siempre va al final  */}
        <Route path="*" element={<NotFound/>} />
    </Routes>
    </div>
  );
}

export default App;
