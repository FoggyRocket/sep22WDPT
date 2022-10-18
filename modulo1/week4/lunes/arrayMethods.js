
  function testArguments(){
    console.log("que son:",arguments) //=> [...] => {} 

    console.log("que hay?",arguments[2])
    console.log("length",arguments.length)
  }
  let perro = {
    age:32,
    2:"Dylan pro"
  }

  console.log(perro.age, perro[2] )

  testArguments("perro","gato",true,123,[90,12])//


 
console.log("students",students)

//map iterar en un arreglo y ademas crea un nuevo
//arreglo partiendo del original

//array.map(cb)// cb= callback => funcion anonima
//callback de un map nos manda 3 parametros 
//1) elemento evaluando
//2) indice o pos elemento actual
//3) el arreglo original

/**
 *  array.map((item,index,arrOriginal)=>{ ... })
 */
// map me regresa un arreglo si o si
//crear un arreglo de nombres apartir de students

// const onlyNames2 = students.forEach((student, index,arrOriginal)=>{
//   // console.log("item:",student)
//   // console.log("index:",index)
//   // console.log("arr:",arrOriginal)
//   return student.name 
// })

const onlyNames = students.map((student, index,arrOriginal)=>{
  // console.log("item:",student)
  // console.log("index:",index)
  // console.log("arr:",arrOriginal)
  return student.name 
})
console.log("onlyNames",onlyNames)


//filter nos crea un nuevo arreglo cumpliendo la condicion
const bestStudents = students.filter((student,index,arrOriginal)=>{
    return student.finalExam >= 70 
}) 

const noLopez = students.filter((student,index,arrOriginal)=>{
  return!(student.name.toLowerCase().includes('López'.toLowerCase()) 
          || student.name.toLowerCase().includes('Lopez'.toLowerCase())
          )

}) 


console.log("bestStudents",noLopez);


                                                    //0, {},[], {key:perro}
//reduce .reduce((acumulador, item actual )=> {}, acumulador Inicializado )
// regresa la suma de todos los elementos (mezcla)
const elemnts = [ 1,21,532,756,863,20,452,5136];


const sum = elemnts.reduce((acc,cv)=>{
  if(typeof cv === "string"){
    return acc += cv.length
  }
  return acc += cv; // acc = acc + cv => 0 + 1 = 1; 1+21 => 22
},0)

console.log("suma total",sum/elemnts.length)

