//1)importamos express.Router()
const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcrypt")

//2) crear las rutas
//traer info o views
router.get("/signup",(req,res,next)=>{
    res.render("authFolder/signup")
})

//post
router.post("/signup",(req,res,next)=>{
    //descruturamos del req.body
    const {role, ...restBody } = req.body
    const saltRound = 12
    //role="Admin", restBody = {name:"Salvador",email:"vikingodefuego@hotmail.com",pass.....}
    //me va ayudar a validar si el emial ya esta uso 
    User.findOne({ email: restBody.email })
    .then(foundUser =>{
        //foundUser = {...}
        if(foundUser){
            return res.render("authFolder/signup",{ errorMessage:"Usa otro correo"})
        }   //general el salt
        return bcrypt.genSalt(saltRound)
                        //hashear el password
        .then(salt =>bcrypt.hash(restBody.password,salt )  )
        .then(hashedPassword=>{ 
            // crear al usuario
            return User.create({...restBody, password:hashedPassword } )
        })
        .then(userCreated => {
            //debemos de hacer un redirect a perfil cuando se creo el usuario con exito
            res.json({user:userCreated})
        })
        .catch(error=>next(error))
    })
    .catch(error=>next(error))


})



//3)exportar
module.exports = router;