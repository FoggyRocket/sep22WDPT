//if

/**
 * 1,"1","dylan",true,[],{},new Date() //=> verdaderos   
 * estructura
 *  if(condicion){
 *  //nuestro codigo
 *  }
 */
const dylan = 17
if(dylan >= 18 ){
    console.log("Si es mayor de edad");
}else{
    console.log("Dylan aun es un bebe!");
}

// entrar a un bar
const user = {
    name:"Ernesto",
    age:18,
    id:true,
    money:20
}
//como entramos a una propiedad de un objeto?  => R: con un punto (.)
// user.name => "Ernesto"

//1) user.id           => true
//2) user.id === true // true 
if(user.id === true){
    console.log(`${user.name} entro al bar`);
}else if(user.age >= 18){
    console.log(`${user.name} si pudo entrar al bar`);
}else if(user.money >= 500 ){
    console.log(`${user.name} aplico el soborno para entrar al bar`);
}else{
    console.log(`${user.name} no pudo entrar al bar u.u`);
}

//negacion
//1) !user.id // ==> false
//2) user.id === false 
if(!user.id){
    console.log("va por un helado")
    // vainilla 15 y limon 10
    if(user.money >= 15){
        console.log("se compra su helado de vainilla");
    }else{
        console.log("se compra el de limon")
    }

}

// &&
// true && true  => true


/**
 *  if( user.id === true){
 *      if(user.age >= 18){
 *        console.log("eres mayor de edad");
 *      }
 * }
 * 
 */
if(user.id === true && user.age >= 18){
    console.log("eres mayor de edad");
}else{
    console.log("no se cumplen las condiciones")
}

/**
 * const user = {
    name:"Ernesto",
    age:18,
    id:true,
    money:20
}
 */

//   || or 
// true || false => true
// false || false => false
if(user.name.length > 10 || user.id ){
    console.log("se cumple la condicion con un or")
}


//SWITCH

/**
 *  La cantina de Kain
 * 
 *  1) Spaguetti
 *  2) Tacos
 *  3) Pizza
 *  4) Sushi
 */

const mar = 10 ;

switch(mar){
    case 1:
        console.log("Come Spaguetti");
    break;
    case 2:
        console.log("Se como unos tacos");
    break;
    case 3:
        console.log("Pizza con piña!");
    break;   
    case 4:
        console.log("Se come un sushi!!")
    break;
    default:
        console.log("una chela")
}

const count = 5
switch(count){
    case (count === 5):
        console.log("es mayor que cuatro")
    break;
    case count < 2:
        console.log("es menor que dos")
    break
    default:
        console.log("que paso")
}

// var n1=0
// var n2=2
// var n3=6

// function comparacionDeTresNumeros(n1, n2, n3){
//     switch (true) {
//         case (n1 > n2) && (n1 >n3):
//           console.log(`el numero mayor es ${n1}`)
//            break;
//         case n2 > n3 && n2 > n1:
//             console.log(`el numero mayor es ${n2}`)
//           break;
//         case n3 > n1 && n3 >n2:
//             console.log(`el numero mayor es ${n3}`)
//             break;
//         default:
//             console.log(`los numeros ${n1}, ${n2} y ${n3} son iguales `)
//     }
// }
// comparacionDeTresNumeros(n1,n2,n3)

const key = "kain";
switch (key) {
    case "dylan":
        console.log("Un profe apuesto");
        break;
    case "kain":
        console.log("el Alma de la fiesta")
    break
    default:
        console.log("todos son buenos")
        break;
}

//loops


//while
let i=0;
while(i <= 100){
    console.log(`el numero es: ${i}`);
    i++;
}


//do ... while

let result = "";
let j = 0;


//"1" + "1" = ? 
do{
   
    result = result + j;
    j = j + 1; // contador
}while(j < 5)

console.log(`el resultado:${result}`)


let numCounter = 1;
let result2=""
do{

    result2 = result2  + (numCounter === 10 ? "ten" : (numCounter === 20) ? "twenty" : numCounter )
    numCounter ++;
}
while (numCounter <= 30) 

// condicion ? true : false

console.log("result2:",result2)

let contador =0;
let temp="";
let result3=""
do {
    if (contador === 10){
        temp = "ten";
        result3 = result3 + " " + temp;
    } else if(contador === 20){
        temp = "twenty";
        result3 = result3 + " " + temp;
    } else{
        result3 = result3 + " " + contador; 
    }
    contador = contador + 1;
   
} while (contador <= 30)

console.log(`El resultado es: ${result3}`);


for(let x = 1; x<= 100; x++ ){
    console.log(`for:${x}`)
}

const arr = ["Dylan", "Kain","Jose","Cris","Mar","Diego","David","Oscar"]

console.log("ejemplo",arr[6])

for(let z=0; z < arr.length ; z++ ){
    console.log("z",arr[z])
}

//for of // se aplica para "textos" y [Arreglos]

// Dylan

/**
 * D
 * y
 * l
 * a
 * n
 */
let name = "Dylan"
for(const value of name ){
    console.log(value)
}

for(const value2 of arr){
    console.log(value2)
}

//for in => {Objetos}

for(let key2 in user){
    console.log(`key:${key2} y su valor ${user[key2]}`)
}

//leer valor de un objeto con . || []

console.log(user.name)
console.log(user["money"])