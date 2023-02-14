//Este archivo es el corazon para hacer peticiones
import axios from 'axios';

const _api = axios.create({
    baseURL:"https://ironbnb-m3.herokuapp.com",
    timeout:10000,
    //withCredentials:true
})
_api.interceptors.request.use((config)=>{
    //Retrive el jwt desde el local storage
    const storedToken = localStorage.getItem("authToken");
    //JSON.stringify({name:"perro"}) -> para convertir el objeto array boolean o numero a string
    //JSON.parse('{"name":"perro"}') -> para regresar al valor original de texto a ->  objeto array boolean 
    if(storedToken){
        //en este apartado se agregan unas config a los headers
        config.headers = { Authorization:`Bearer ${storedToken}`}
    }
    return config
})

export default _api;