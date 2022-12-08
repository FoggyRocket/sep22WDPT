//import bcrypt || bcryptjs
const bcryptjs = require("bcryptjs");


//decirle cuantos carecters random agregar
const saltRound = 8

const plainText = "Salsa";
const plainText2 = "salsa"

//generate Salt

const salt = bcryptjs.genSaltSync(saltRound)

//hash ->  convertir texto plane a un hash
const hash1 = bcryptjs.hashSync(plainText,salt)
const hash2 = bcryptjs.hashSync(plainText2,salt)

console.log("hash1:",hash1)
console.log("hash2:",hash2)


//comparar un texto vs hash  (Compare nos retorna un boolean)

const compare1 = bcryptjs.compareSync(plainText,hash1)
const compare2 = bcryptjs.compareSync("Gucamole",hash2)
console.log("--------------------------------------")
console.log("compare1:",compare1)
console.log("compare2:",compare2)

