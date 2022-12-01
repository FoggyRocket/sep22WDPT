require("../db");
const User = require("../models/User.model")
const mongoose = require("mongoose")//<-- cerrar la conexion
const users = [
  {
    username: "foggyrocket",
    email: "dylan.torres@ironhack",
    password: "Nova182",
    firstName: "Dylan",
    lastName: "Torres",
    description:
      "texto que me pidio dylan para que se vea en la base de datos, no se que mas escribir",
  },
  {
    username: "jesusglezt27",
    email: "jesusglezt@ironhack",
    password: "jesglez27",
    firstName: "Jesús",
    lastName: "González",
    description: "quiero una cerveza",
  },
  {
    username: "hatchdavid1",
    email: "dhatch@ironhack",
    password: "perrito1234",
    firstName: "David",
    lastName: "Hatch",
    description: "Me gusta comer",
  },
  {
    username: "Dapato",
    email: "d.perfect7@ironhack",
    password: "Lua123",
    firstName: "Diego",
    lastName: "Perfecto",
    description: "Quiero una cawama pal dolor de cabeza",
  },
  {
    username: "jlarriaga",
    email: "jlarriaga91@gmail",
    password: "jl4rr14g4",
    firstName: "Jose Luis",
    lastName: "Arriaga",
    description: "Me gusta jugar tenis",
  },
  {
    username: "cgomezm",
    email: "cgm.cristian@gmail.com",
    password: "123$5678",
    firstName: "Cristian",
    lastName: "Gomez",
    description: "tres tristes tigres tragaban trigo",
  },
  {
    username: "marmolina",
    email: "mar.molinacarlos@gmail.com",
    password: "1234ABCD",
    firstName: "Mariana",
    lastName: "Molina",
    description: "Amo los gansitos",
  },
];

User.insertMany(users)
.then(usersCreated=>{
    console.log("se crearon tantos usuarios", usersCreated.length)
    mongoose.connection.close()
})
.catch(error=>{console.log("error",error)})

