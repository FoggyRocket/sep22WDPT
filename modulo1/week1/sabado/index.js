
// function perro(){
//     return 1 // true
// }

// true && (perro()) //==> true
// false || (3>1) //==> true

// perro() && (2>4) //=> false


// !tengoNovia //==> noTengoNovia

let hijos; 
                    //boolean
function tengoHijos(params){
    //si es positivo
    if(params){
        //va a retornar el valor de los hijos
        return "soy verdadero"
    }else{
        return "soy falso"
    }
}


//function
            //params
function ejemplo(){
    //return undefined
    return null
}

//nameFunction()
tengoHijos(true)

//ejemplos de  Truthy flasy

console.log("mi primer hola mundo")


//{key1:1,key2:2} 
//Object.keys   => [key1,key2]
//length => 0 ... n

///numeros negativos x < 0

let name = "david";
console.log("value1:",name)
//1) vamos a convertir string => array 
// .split(" ")
name = name.split("")
console.log("value2:",name)

//2) detectar la posicion y cambiarlo
name[2] = "V"
console.log("value3:",name);

//3) regresar de array => string 
name = name.join("")



console.log("value Final:",name)

//como saber si el arreglo esta lleno? 
//[].length ==> 0
if([1,"dyaln","perro"].length){
    console.log("tengo valores")
}else{
    console.log("no tengo valores")
}

