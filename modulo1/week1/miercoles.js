// comentar en una linea, esta es una carta de amor para kain es el mejor ta

/**
 *  este es un comment multilinea
 * para que vean que si se puede
 * :D 
 */

//variables!!!

//const solo lectura
//let ->nos permiten edit, reasignar
//var -> || 

//delete const let var function

let a;// no se recomienda
let color; 
let $Nova;
let demo10;
let quiero_un_poco_de_agua; //snake_case
let quieroComerPapas; //camelCase
let π; //simbolos;
let _perro;
//let -cat ; este no funciona!!!

//Declarar 5 variables!!!


//cambiar valor
//undefined
let perro;



console.log("cual es el valor", perro)
// = asignar un nuevo valor
// == comparamos valor 
// ===  comparar el valor y el tipo de dato  1 ===  "1"

perro = "Nova";

console.log("segundo valor", perro);

perro = "Howl";

console.log("el ultimo",perro);

// se puede cambiar el valor de una const???????

const cat = true;
console.log("que es mi const1",cat);

//tipos de datos (typeof)

console.log("que tipo de dato es perro",typeof perro );
console.log("que tipo de dato es cat",typeof cat );

console.log(2 + 2)

console.log("Dylan"/4)

console.log(2 + 2);
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);


//assignment  Operators


let myAge = 29;

//1) myAge =  29 + 1;
//2) myAge = myAge + 1;
//3) myAge ++; sumale uno a la variable
//4) myAge += 1;
            //29
//myAge =  myAge + 1;

myAge += 10;
// -= 
// *= 
// /=

console.log("cual es mi edad?",myAge)

const expressionOne = ((2 * 2) + 5) * 6;
 console.log(expressionOne);

const expressionTwo = ((2* 2) + (5 * 3)) - 5;
console.log(expressionTwo);

const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree);

const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionFour);

//Strings!!!

let name = `Dylantorreycuatro`;
let lastName = "Torres";
let hobby = 'Lol';
let revelacion = 'El nombre de kain es "Emanuel" ';
let prhase = " cat's ";
let todoCompleto = `El nombre de kain es "Salvador" y vamos a ir a carl's `

console.log(`Mi nombre es: ${name} ${lastName} tengo el hobby de ${hobby},
mi edad es ${29 + 1 }`)


console.log("Hola",name)
console.log("Hello", name +" "+ lastName + hobby)

const newArr = [0,1,2]


//length solo [] Arrays y "texto" strings
console.log("Cuanto mide?",name.length)
console.log("Cuanto mide2?",newArr.length)

console.log("que hay",name[2]);
//012
//dylan 

console.log(name.indexOf('y'))

console.log(name.lastIndexOf('y'))

console.log("$".repeat(3));

console.log("la".repeat(10));

console.log(name.substring(1,7))

console.log(name.slice(-3,-1))
