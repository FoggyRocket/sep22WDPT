import { useState } from "react";

function FormGuest({getGuest}) {
  //utilizar useState -> para guardar los datos del invitado
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

const sendData = (e)=>{
    //evitar que la pagian se recarge cuando se mande datos en un formulario
    e.preventDefault()
   
    getGuest( {name,email } )

    setEmail("")
    setName("")
   
}

  return (
    <form onSubmit={sendData}>
      <label htmlFor="">Nombre</label>
      <input 
        name="name" 
        placeholder="Pedro..." 
        value={name}
                //event = e 
        onChange={(e)=>setName(e.target.value)}
    />
      <label htmlFor="">email</label>
      <input
        placeholder="demo@gmail.com"
        name="email"
        type="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <button type="submit">Invitar</button>
    </form>
  );
}

export default FormGuest;
