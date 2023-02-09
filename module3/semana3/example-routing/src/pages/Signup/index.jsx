import "./styles.css";
import { useState, useRef } from "react";

function Signup() {
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
    setUsername(valor);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPassword("");
    setAboutMe("");
    setUsername("");
    setGender("");
  };

  const handleImage = (e) => {
    const objectURL = URL.createObjectURL(e.target.files[0]);
    setPreview(objectURL);
  };
  const uploadImage = () => {
    const target = inputFile.current;
    target.click();
  };
  return (
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
  );
}

export default Signup;
