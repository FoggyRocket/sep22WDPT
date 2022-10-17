
// const Chayanne = require("./chayanne/index.js")

// ./ mismo nivel =>
// ../ salir un nivel =>
                //0   1    2  3   4
const squares1 = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
let dice;
/**
 * name
 * color
 * position
 * cash
 * 
 *  => 2 a 4
 */
 /**
  * 1) crear variable independientes  mala practica
  * 2) crear objetos!!!
  */

 const player1 = {
    name:"David",
    color:"red",
    position:0,
    cash:1000,
    isLost:false,
    move(){
        let dice = Math.floor( Math.random() * (6 - 1) +1 )
        this.position = (this.position + dice) % squares1.length;
        this.cash += squares1[this.position]
        if(this.cash < 0){
            console.log(`Game Over for ${this.name}.`)
            this.isLost = true
        }
    },
    displayStatus(){
        console.log(`status: ${this.name} is at position ${this.position} and has $${this.cash}`)
    },
    //funciones dentro de un objeto!!
 }
 player1.name = "David Hatch";
 const player2 = {
    name:"Nova",
    color:"pink",
    position:0,
    cash:1000,
    move(){
        let dice = Math.floor( Math.random() * (6 - 1) +1 )
        this.position = (this.position + dice) % squares1.length;
        this.cash += squares1[this.position]
        if(this.cash < 0){
            console.log(`Game Over for ${this.name}.`)
        }
    },
    displayStatus(){
        console.log(`status: ${this.name} is at position ${this.position} and has $${this.cash}`)
    },
 }

 const player3 = {
    name:"Howl",
    color:"greenvc",
    position:0,
    cash:1000,
    //funciones dentro de un objeto
    /**
     * function nameFunc(params){
     *  return undefined
     * }
     */
    move(){
        let dice = Math.floor( Math.random() * (6 - 1) +1 )
        this.position = (this.position + dice) % squares1.length;
        this.cash += squares1[this.position]
        if(this.cash < 0){
            console.log(`Game Over for ${this.name}.`)
        }
    },
    displayStatus(){
        console.log(`status: ${this.name} is at position ${this.position} and has $${this.cash}`)
    },
    // extra ()=> arrowFunctions es funcion anonima // retorna el this de un nivel anterior
    hack: ()=> console.log("hack this",this)
 }

 //localStorage
 //modificar un objeto?
// = (asigna)

//esto va a cambiar

//<---->turn 1 Player 1<--->

// 1 ... 6

dice = Math.floor( Math.random() * (6 - 1) + 1 ) //=> 1
//modificamos a nustro objeto Player1 en su llave position y le colocamos el nuevo valor
player1.position = ( player1.position + dice) % squares1.length // siempre debe estar en el index 0 y 15
player1.cash  += squares1[ player1.position ]; // le restamos o sumanos dinero al jugador

console.log("status p1",player1)



dice = Math.floor( Math.random() * (6 - 1) + 1 ) //=> 1
//modificamos a nustro objeto Player1 en su llave position y le colocamos el nuevo valor
player2.position = ( player2.position + dice) % squares1.length // siempre debe estar en el index 0 y 15
player2.cash  += squares1[ player2.position ]; // le restamos o sumanos dinero al jugador

console.log("status p2",player2)
console.log("<=====================>")
player3.displayStatus()
console.log("this",this)

console.log("<=====================>")
player3.move();
player1.displayStatus();


// let gameOver = false
// let turns = 1

// while(turns < 50){
    
//     player1.move()
//     player2.move()
//     player3.move()
//     turns++
//     //tener un gandor
// }

// player1.displayStatus();
// player2.displayStatus();
// player3.displayStatus();
