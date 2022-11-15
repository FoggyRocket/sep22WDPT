function func2() {
  console.log("Pago la cena");
}
//callback === cb
function func1(cb) {
  console.log("Vamos a cenar");
  cb();
}
//invoke
//ejemplo 1
//func1() //1
//func2() //2

func1(func2);

/**
 * func1
 * func2
 */

//callbacks
// func1( func2 ) --- good
// func1( func2() ) ---bad

const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

//Math.floor(Math.random() * 1000)
function getDirections(step, callback, errorCallback) {
  setTimeout(() => {
    console.log(directions[step]);
    //1)
    if (!directions[step]) errorCallback("No hay ruta");
    else callback();
  }, Math.floor(Math.random() * 3000));

  /**
   * 2)
   *  if()
   *      codigo
   *  else
   *      codigo
   *
   * 3?) para una linea (ternario)
   *  ? codigo: codigo
   */
}
/*
getDirections(0,() => {
    getDirections(1, () => {
      getDirections(2, () => {
        getDirections(3, () => {
          getDirections(
            4,
            () => {},
            (error) => {
              console.error(error);
            }
          );
        });
      });
    });
  },
  (error) => {
    console.error(error);
  }
);*/

                        //step = 0,1,2,3,4...n
function obtainDirections(step){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("P:",directions[step])
            if(!directions[step]){
                reject("No hay mas rutas")
            }else{
                resolve()
            }
        },
        Math.floor(Math.random()*3000))
    })
    //una promesa siempre tiene  un "then" && "catch" (finally)
}
         //promise.then(callback).catch(errorCallback).finally(callback)
obtainDirections(0)
.then(()=>{
    console.log("dentro del then")
    return obtainDirections(1)
})
.then(()=> obtainDirections(2)) //<== en automatico retorna lo que regresa la funcion 
.then(()=>obtainDirections(3))
// .then(()=>obtainDirections(4)) //<=== 
.catch((error)=>{
    console.warn(error)
})
.finally(()=>{
    console.log("Soy el final")
})