// class && inheritance

const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
let dice;


/**
 *  class PerroClass{
 *   this.name = "Nova";
 *    comer(){}
 *  }
 * 
 *  perroObjet={
 *      name: "Howl",
 *      ladra(){}
 * }
 */

// const user = {}

// //cuando asignamos un valor a una llave que no existe
// user.anime = "One piece"

//  user= {anime:"One piece"}

//crear class Player

class Player{ 
    //method lo vamos a utilizar para mandar propiedades dinamicas y agregarlas a mi clase
    //constructor({name,color})
    constructor(name,color){
        // propiedades
        this.name = name; //dinamicos
        this.color = color; //
        this.position =0 //valores hardcode o default
        this.cash= 1000 //
    }

    // methods
    move(){
        let dice = Math.floor( Math.random() * (6 - 1) +1 )
        this.position = (this.position + dice) % squares.length;
        this.cash += squares[this.position]
        if(this.cash < 0){
            console.log(`Game Over for ${this.name}.`)
            this.isLost = true
        }
    }
    displayStatus(){
        console.log(`status: ${this.name} is at position ${this.position} and has $${this.cash}`)
    }
    //return undefined
}

const dylan = new Player("Dylan Torres", "blue")
const jose = new Player("Jose","red")

dylan.move()
dylan.displayStatus()


console.table([jose,dylan])


// herencia (inheritance) extends

class Pokemon{
    constructor(name,type,size,evolution){
        this.name = name;
        this.type = type;
        this.size = size;
        this.evolution = evolution;
        this.region = "Aloha";
        this.game = "Sword & Shield";
        this.hp = 60;
        this.df = 60;
        this.power = 50
        this.master = "ASH";
    }

    // methods
    atk(){
        console.log(`${this.name} attack with ${this.power} points`)
    }
    defens(){
        console.log(`${this.name} solo se defiende`)
    }
}

//herencia (extends && super)
class Charmander extends Pokemon{
    //desctructurar method({name,perro,gato,count})
    constructor({name, type,size, evolution, nickname }){
        super(name, type,size, evolution)
        this.nickname = nickname;
    }
}

class Pikachu extends Pokemon{
    constructor({name, type,size, evolution }){
        super(name, type,size, evolution)
    }

    specialMove(){
        console.log("atacas con todo!")
    }
    evolutionX(){
        console.log("evoluciona con todo!")
    }

    //modificar un metodo
    atk(enemy){
        console.log(`${this.name} este pega mas duro  ${this.power} mas 100 extra para dar mas daño points`)
        enemy.defens()
    }
}

let valuesDefault = {
    size:`9m`,
    nickname:"El flamas",type:"hielo", name:"charmander"
} 


const myCharmander = new Charmander(valuesDefault)
const pokemonMar = new Pikachu({ size:`2m`, type:"electrico", name:"pikachu"})


pokemonMar.atk( myCharmander ) //viene en su ejercicio