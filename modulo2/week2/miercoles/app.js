// importar
// const nombrePackage  = require("nombrePackage")
const mongoose = require("mongoose");
const User = require("./models/User.model")
const data = require("./data.json")
// mongoose hace la conexion con la base de datos
// ayuda a crear, filtrar, actualizar, borrar y leer ( CRUD )
// la creacion de modelos

//mongoose la mayoria de las cosas son promesas


//conection es una promesa || thne catch
                //url de la base datos puede local o remota
                //"mongodb://localhost/nombreBaseDatos"
mongoose.connect("mongodb://localhost/tinderPerritosV1")
.then( x => console.log(`Conectado a mongo! base de datos: ${x.connections[0].name}`) )
.catch( err => console.error("el error de la conexion:",err) )


// v1 Model
                        //Name -> como se encontrara en la  base
const Dog = mongoose.model("Dog",{
    breed:String,
    age:Number,
    weight:Number,
    gender:String,
    name:String,
    isAvailable:Boolean,
})
//
//CREATE v1

const doggy = new Dog({
    isAvailable:false,
    breed:"Meztiso2",
    weight:20,
    gender:"male2",
    name:"howl2",
    age:1,
    description:"Es un perro muy miedoso, se como le de nova y aun destrosa cosas"
})
//esto es solo por la clase
// doggy.save() 
// .then((newDoggy)=> console.log("el nuevo:",newDoggy)  )
// .catch((error)=>console.log("error save:",error))

/**
 * newDoggy = {
    isAvailable:true,
    breed:"Beagle",
    weight:13,
    gender:"female",
    name:"Nova",
    age:3,
    __v:0,
    _id:2346578a7sd78as6dd923
    }
 */
// Metodos de mongoose

//Model.find() -> promesa *** el then response con todos los documentos de esa collection
Dog.find()
.then( dogs => console.log("que es dogs?:", dogs) )
.catch(error=> console.log("error en el find",error))

//findById(id) => busca el documento por id 
//findOne({..filtro}) => busca la primera coincidencia 
//findOneAndUpdate({..filtro},{info a modificar}) => busca la priera coincidencia y actualiza
//findOneAndDelete({...filtro}) =>busca la primera ocincidencia y lo borra
//findByIdAndUpdate() => busca el documento por id  y actualiza
//findByIdAndRemove() => busca el documento por id  y borra
//findByIdAndDelete() =>


//find({filter})
Dog.find({name:"Nova2"})
.then( dogs => console.log("perros con ese nombre?:", dogs) )
.catch(error=> console.log("error en el find",error))

//findOne
Dog.findOne({name:"Astro"})
.then( dog => console.log("perro con ese nombre?:", dog) )
.catch(error=> console.log("error en el findOne",error))


//findByIdAndUpdate
                //(id, {infoUpdate}, {new:true})
Dog.findByIdAndUpdate("637ed76db08fd17ea12e628e",
 { name:"Hunter",gender:"male" }, 
 {new:true})
.then( dog => console.log("perro modificado", dog) )
.catch(error=> console.log("error en el findById",error))
                //{...filtro}, {infoUpdat},{new:true}
Dog.findOneAndUpdate({weight:20, age:1},{isAvailable:true},{new:true})
.then( dog => console.log("perro modificado ONE", dog) )
.catch(error=> console.log("error en el findOneAndUpdate",error))

//create user **
User.create({
    name:"Donovan",
    email:"dylan.torres@ironhack.com2",
    password:"Nova182Howl2",
})
.then( user => console.log("un nuevo usuario", user) )
.catch(error=> console.log("error en el create user",error))
//InserMany
Dog.insertMany(data)
.then( dogs => console.log("muchos perrros fueron insertados", dogs.length) )
.catch(error=> console.log("muchos perrros",error))