//todo lo que importemos va de la linea 1 hacia abajo
// destructuracion y asignacion 
const { color, log } = require('console-log-colors');
const { red, green, cyan,blue } = color;


//color = red green cyan
// red() // color.red()


//console.log( red("Esto es otro mensjae pero mas pro con color") )
//console.log("Hola mundo")

//Nunca deben de subir los node_modules
//.gitignore <-- nos va a ayudar para no subir x elementos

//1.- 
const http = require("http")

//Server v.1
/*const server = http.createServer((request,response)=>{ //start callback
    response.write("Hello, ya eres pro en el backend")
    response.end()//cerramos la comunicacion con el server
})//end callback
*/

//server v2

const server = http.createServer((request,response)=>{
    console.log( green(`Someone has request ${request.url}`) )
    console.log("El request",request)
    //reques.url()
    // "/" raiz
    if(request.url === "/"){
        response.write("Este es el home!!!")
        response.end()
    }else if(request.url === "/about"){
        response.write("Me encantan los tacos con un buen de salsa que pica!!!")
        response.end() //es para que el server no se quede pensando
    }else{
        response.statusCode = 404
        response.write("Sorry bro :(")
        response.end()
    }

})

// request = req
// response = res





//ruta raiz localhost
//127.0.0.1:port
//localhost:port
//http://localhost:3000/ 
console.log( blue("server is running") )
//donde va a vivir nuestro server
//3000 3001 3002
//localhost:3001
server.listen(3000) //esta linea de codigo es para alojar nuestro server en un puerto y trabajar con el