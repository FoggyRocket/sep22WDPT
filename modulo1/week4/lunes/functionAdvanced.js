

function welcomeMessage(msg){
    msg
    //return undefined
}

function byeMessage(msg){
    return msg
}

const hola = welcomeMessage("Que onda morros!!! "); // => undefinde
const adios = byeMessage("sale morros!") // => msg

console.log("resultad:",hola,adios)
    //undefined === undefined => true
if( welcomeMessage("perro") === undefined){
    console.log("No hay mensaje");
}

//function Declaration
 console.log( perros() ) //<= error o success? 



function perros(){
    return ["perro","El negro","El coffee","Thor","Shadow"]
}
const perritos = perros() // [....]

//function Expression


const comida = function (){
    return "pozole"
}

console.log( comida() )
const animes = () => {
    return "One Piece"
}

console.log("<============>")


//cb
//war.addVikings(vikingo)
function example(){

    setTimeout( function (){
        console.log("lo logre!!!")
     }, 2000 )

}

/**             callback= function perro(){....}
 *  setTimeout(callback, count ) => methods javaScript nativo
 * 
 */

example()

function eatDinner(callback){
    callback() //ejecutar una funcion que se manda como argumento
    console.log("Eating the dinner")
   
} 

function eatDessert(){
    console.log("eating the dessert")
}
        //eatDessert() => valor que estamos retornando
eatDinner( eatDessert )

eatDinner( function (){ 
    console.log("esto es un callback")
} )


console.log(typeof eatDessert  );// function
console.log(typeof eatDessert() );// undefined
//Eating the dinner
//eating the dessert
//methods arrays 

//Anonymous

// (
//     function (){
//         return 4 + 4
//     }
// )()

const resultSum = function (){
    return 4+4
}

const resultRest = () => 12 - 6;

const resultDiv = ()=>{
    return 13/2
}

console.log( resultSum() );


const user = {
    name: 'ana',
    age: 29,
                //. 
    // getOlder: function () {
        
    //     //setInterval(callback,timeMS)
    //     setInterval(function(){

    //         this.age += 1; // this.age = this.age +1
    //         console.log(this);
    //     },1000)
    // },
    getOlder:function(){
        // setInterval(()=>{
        //     this.age += 1;
        //     console.log(this.age)
        // },1000 )
    },
            //..
    getName:()=>{
        console.log(this)
    }
  };

  user.getOlder()
  user.getName()


  function testArguments(){
    console.log("que son:",arguments) //=> [...]
  }

  testArguments()//