//async / await
// async function syntax...
async function nova() {}

//arrow
const howl = async () => {};

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];


function obtainDirections(step){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(directions[step])
            if(!directions[step]){
                reject("No hay mas rutas")
            }else{
                resolve( directions[step] )
            }
        },
        Math.floor(Math.random()*3000))
    })
}
//try / catch 
const getCoffee = async () =>{
    try{
        await obtainDirections(1)
        await obtainDirections(2)
        const direction2 = await obtainDirections(1)

        console.log("que es direction2?",direction2)

    }catch(error){
        console.log("error try",error)
    }finally{
        console.log("todo chido ")
    }
}

getCoffee()

console.log("todo bien ")


//fetch

fetch("https://rickandmortyapi.com/api/character/1")
.then((response)=>{
    console.log("el response",response)
    return response.json()
})
.then((jsonReponse)=>{
    console.log("el bueno,",jsonReponse)
})
.catch((error)=>{
    console.log("el error",error)
})


async  function getCharacter(){
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character/2")
        const jsonReponse = await response.json()
        console.log("el otro",jsonReponse)
    }catch(error){

    }
}

getCharacter()