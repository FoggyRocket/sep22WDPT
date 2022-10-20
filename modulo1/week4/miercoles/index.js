/**
 *  array.reverse() los inverte => [12,30,40,50].reverse()   
 *  => [50,40,30,10]
 */

//try catch


function perro(){
    try{
        return 0 + count
    }catch(error){
        console.error(error)
        alert(error)
    }finally{
        console.log("final")
    }
}

// SORT

const numbers = [2,1,10]

numbers.sort( (a,b)=> a - b  )
// a - b = -number (a se ordena antes que b)
// a - b = +number (b se ordena antes que a)
// a - b=  0 (nada cambia)
// a - b = aces
// b - a = desc 
console.log("sort:",numbers)

function compare(a,b){
    //debugger
            // resultado se asi 
    if(a<b) return -1 // b es mayo
    if(a>b) return 1 // a es mayor
    if(a===b)return 0 // iguales
            //para numeros && palabras 
    //desc 
    /**
     *  if(a>b) return -1 // a es mayo
        if(a<b) return 1 // b es mayor
        if(a===b)return 0 // iguales
     */
}
                //a     b
const numbers2 = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

//1) compare()
//2) compare
console.log(typeof compare()) //
console.log(typeof compare)  //

                //
perro()
numbers2.sort(compare)
//number2.sort((a,b)=>{ .... })

console.log("sort2:",numbers2)
numbers2.sort((a,b)=>b-a)
console.log("sort2.5:",numbers2)

//LEtters

const letters = ["ä","c","b"]

function compareLetters(a,b){
    return a.localeCompare(b)
}


letters.sort(compareLetters)

console.log("letter1:",letters)

const words = ['Hello','$Dollar', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third']

function compareWords(a,b){
    //DESC numeros como palabras o letas
    if(a<b) return 1;
    if(a>b) return -1
    if(a===b) return 0
}


words.sort(compareLetters)

console.log("words1:",words)

//sort Object

const students = [
    {name:"Dylan",age:29},
    {name:"Jesús",age:21},
    {name:"Cristian", age:36},
    {name: "Jose", age: 30},
    {name:"Diego", age: 22},
    {name:'David', age:27},
    {name:"Mar", age: 25},
    {name: "alfredo", age: 34},
    {name: "Kain", age:39},
    {name: "Oscar", age:39},
    {name: "Karla", age:18},
    {name: "Alexa", age:22}
]

//Asce

//function
                    //a={name:Dylan}, b= {name:jesus} 
function compareStudent(a,b){
    return a.name.localeCompare(b.name)
}
//porque mandamos un cb(callback)
students.sort(compareStudent)

console.log("students:1",students)

//ordenar por edad pero en una linea

//code... ()=> , ()=>{ return loqueRetornamos }

students.sort((a,b)=> a.age - b.age)

console.log("students:2",students)



