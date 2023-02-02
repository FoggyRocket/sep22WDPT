import logo from "./logo.svg";
import "./App.css";
import { useState,useRef } from "react";
/**
 *  sin index.js componets
 *  import FormController from './components/FormController/CompenentenForm'
 *  import InputCustom from './components/InputCustom/ElComponente'
 *  import CardCustom from '.....'
 *
 *  con el index.js
 * import {Avatar,Suko,Katara} from './component'
 */
function App() {
  // vamos a crear un hook para cada valor de mi formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [gender, setGender] = useState("");
  //useRef
  const inputFile = useRef(null);

  //extra image preview
  const [preview, setPreview] = useState(
    "https://drive.google.com/uc?export=view&id=1K5_tAX_taOQQ0wwmFx3P--V05kjvg4cu"
  );

  const handleUsername = (valor) => {
    console.log("que es el valor?:", valor);
    setUsername(valor);
  };
  const handlePassword = (e) => {
    console.log("e en el passwod:", e);
    setPassword(e.target.value);
  };

  const handleGender = (e) => {
    console.log("en el gender", e);
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("la data", { username, password, gender, aboutMe });
    setPassword('')
    setAboutMe('')
    setUsername('')
    setGender('')
  };

  const handleImage = (e)=>{
    console.log("En la imagen",e)
    const objectURL = URL.createObjectURL(e.target.files[0])
    setPreview(objectURL)
  }
  const uploadImage = () => {
    const target = inputFile.current
    console.log("target que es,",target)
    target.click();
  }
  return (
    <div className="App">
      <div className="card" id="card">
        <div className="front">
          <p className="login_word">SIGN UP</p>
          <img onClick={uploadImage} src={preview} alt="person picture" />
          <form
            //method="post" action="" ya no las utilizamos
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              className="f1"
              maxLength={10}
              required
              autoComplete="off"
              value={username} //por que estamos agregando el value???
              onChange={(event) => handleUsername(event.target.value)} //este es un metodo esucha lo que vamos a tap en el teclado
            />
            <input
              onChange={handlePassword}
              type="password"
              name="password"
              placeholder="password"
              className="f1"
              maxLength={10}
              required
              autoComplete="off"
              value={password}
            />
            <textarea
              value={aboutMe}
              onChange={(event) => setAboutMe(event.target.value)}
              type="text"
              className="f1"
              name="aboutMe"
              placeholder="About me"
            />
            {/* un selector */}
            <select
              className="f1"
              name="gender"
              value={gender}
              onChange={handleGender}
            >
              <option>Choose one</option>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="other">I prefer not to say</option>
            </select>
            <input 
              ref={inputFile}
              type="file"
              className="ocultoEnLasSombras"
              onChange={handleImage}
              /*multiple nos permite subir varios archivos*/ 
            />
            <button className="f1" name="login">
              Sign up
            </button>
            <p>already you have account</p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
