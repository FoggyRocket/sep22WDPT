const products=[
    {name:"Thor Hammer", price:100, cant:2},
    {name:"Batman toy", price:300,cant:1},
    {name:"Digimon TCG",price:300,cant:3},
    {name:"Sceptre",price:1500,cant:1}
]
let name="perro"
var  cat = "Kitty"
/**
 * Prueba para el lunes
 *  orden = {
 *      products:[...],
 *      total:$$ + iva
 *      subTotal:$$ (sin iva)
 *  }
 */
//reduce ex1
/**
 *  .reduce((acumulador, itemActualArray)=>{ return 0}, acumuladorValorInicial )
 */
//Numero
const total = products.reduce((acc,cv)=>{
    return acc = (cv.cant * cv.price) + acc
},0)

console.log("total",total)
// removeProduct()  getTotal()   addProduct()
function removeProduct(cant,id_prod){
    const prod = products[id_prod]
    //prod.cant = prod.cant - cant
    prod.cant -= cant;
    if(prod.cant <= 0){
        //[...].
        products.splice(id_prod,1)
        return "se elemino producto"
    }

    return "Se resto producto"
}
function getTotal(){
   return  products.reduce((acc,cv)=>{
        return acc = (cv.cant * cv.price) + acc
    },0)
}                   //(name,cant,price)
                    //({ cant,name,price })
function addProduct(prod){
    products.push(prod)
    return "Se agrego un producto"
}

addProduct( {
    name:"Torta de Chilakiles",
    cant:2,
    price:80
})

//addProduct("Carnitas",2,15)

//functions Scope
function getName(prod){
    const name = "dylan"
    console.log("producto",name)

}


function dogName(){
    console.log("El name:",`${namex}`)
}


function blockScope(num){
    if(num>= 10){
        const name ="Nova";
    }
    return namey
}


function varTest(){
    var cat = "Tyr";
    var kain= "Motomami!";

    return cat
}
console.log("Kain?",cat)

function varTest2(){
    for(var cat = 0; cat<= 9;cat++){
        console.log("catNum:",cat)
    }

    console.log("mi gato se llama?",cat)
}

function varTest3(){
    for(let cat = 0; cat<= 9;cat++){
        console.log("catNum:",cat)
    }

    console.log("que es cat?",cat)
}


function ultimoEjemplo(){
    var name = "Ironhacker";
    //if(condicion === true){ }
    // 4>2, "perro", 1, true, [],{}
    if(true){
        var name = "Ted";
        console.log(`El nombre dentro del if: ${name}`)
    }

    console.log(`El nombre fuera del if: ${name}`)
}

//var nova = "Perro";
// nova = "nova"
// var nova = "otro perro";



nova = "Nova"
var howl="Howl"

console.log(window)
const arr = [1,4,3,5]

console.log("env?",window.nova)

function ifMuchos(num){

    if(num >= 50){

        return "es mayo que 50"

    }else if(num>= 45 && num<50){

        return "estamos en rango"
    }else if(num <= 30){

        return "es menor que 30" 
    }else{

    }

    return "no esta en rango"

}



//Shadowing

let age = 30;
let city= "CDMX";


function movedOut(){
    name = "Dylan" // se reasigna
    let age = "No se dice la edad"; // se declara una nueva variable para el scope de la funcion

    console.log(`fn)${name} se mudo a ${city} a la edad de ${age}`)
}

console.log(`1)${name} se mudo a ${city} a la edad de ${age}`);
movedOut()
console.log(`2) ${name} se mudo a ${city} a la edad de ${age}`);




//for of Arrays && Strings
//for in Objectos


//Object.assing()

const user = {
    username:"Dylan",
    age:30,
    pets:[
        {name:"Nova"},
        {howl:"Howl"}
    ],
    key:12321
}

function cloneObject(object){
    const clone = {} //value base === {} 
    //leer valores de un objeto
    //1) {}.key => value que este almacenado en esa llave
    //2) {}["key"] => ||

    //Crear o asignar y tambien editar valores a un objeto!
    //1) {}.perro = value
    //2) {}['cat'] =  value
    for(let key in object ){ // sacar llave por llave de mi objeto
        console.log(`que es key:${key}, valor:${object[key]}`)

        //typeof array || object => es unicamente object
        if(object[key] != null && typeof object[key] === "object"){
            clone[key] = cloneObject( object[key] )
        }else{
            //clone['username'] = "dylan"
            clone[key] = object[key]
        }
     
    }

    return clone 
}


const newArray = [1,2,3,4,5,5,6,8]
//... saca(copia) todos los valores del contenedor [] || {}
// y los agrega(pega) el nuevo contenedor [] || {}

const otroArray = [...newArray]


const newUser = {
    ...user
}

let numeroArr = [ 20, ...newArray, 10,20,300  ]
// contra
                        //1       //2
const students = ['Ana', 'John', 'Fabio'];
                    //splice(index,numElemntos)
const Ironhacker = [...students.slice(0,1)]


const book = {
    author: 'Charlotte Bronte',
    pages: 400,
    publishers: [
      {
        name: 'publisher1',
      },
      {
        name: 'publisher2',
      },
    ],
    phrase:"Matanga dijo la changa",
    genero:"rock"
  };

  // saca las llaves del objeto book y crea variables independientes
  //en los objetos no importa el orden
  //... en la destructuracion
  const { publishers, ...theRest } = book

  const newPublushers = book.publishers
  console.log("que es pub:",publishers, book.publishers)

  console.log("que es theRest",theRest)