const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")

const saltRound = 12;

router.get("/signup",(req,res,next)=>{
    res.render("authFolder/signup")
})

// async await - try catch()
router.post("/signup",async (req,res,next)=>{
                                                    //restBody={role}
    const { password, confirmPassword, email,username ,...restBody} = req.body

    console.log("todos los datos:",req.body)
    console.log("que hay en el restBody:",restBody)
 try {
    if(!email){
                //.render(es para mostrar archivos de mi carpeta views)
                //.render("fileName") || .render("folderName/fileName") <--- si hay una carpeta dentro de views
                // user/dylan/Documents/IH/sep220/demo/views/
        return res.render("authFolder/signup",{errorMessage:"El campo email debe contener datos"})
    }
    if(!username){
        return res.render("authFolder/signup",{errorMessage:"El campo username debe contener datos"})
    }
    if(!password || !confirmPassword){
        return res.render("authFolder/signup",{errorMessage:"El campo password o confirmPassword debe contener datos"})
    }
    // password cumple con la regla del regex
    if(password !== confirmPassword){
        return res.render("authFolder/signup",{errorMessage:"Los password no coinciden"})
    }
    //validar si mi email ya fue tomado 
                                    //{email:email}
    const found = await User.findOne({ email })
    // Validar si se encontro un email registrado en esta base de datos (App)
    //si se encontro algo en findOne o findById regresan un {} de lo contrario null
    // [] || {} (vacios o llenos) son verdaderos
    if(found){
        return res.render("authFolder/signup",{errorMessage:"Este email ya se fue registrado"})
    }
    //creo mis caracteres aleatoreos que se agregan a mi hash
    const salt = bcrypt.genSaltSync(saltRound);
    // hacemos hash de "perrito" -> "1237g25f1265s1203273" 
    const passwordHashed = bcrypt.hashSync(password,salt)
                                        // .create(req.body)
    const userCreated = await User.create({ email,username, password:passwordHashed })
    //config mongos-conect y session-store
    const newUser = userCreated.toObject()
    delete newUser.password
    //guardar el usuario creado en el req.session para indicar que ya tiene una session activa
    req.session.currentUser = newUser
    res.redirect("/user/profile")
 
 } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/signup', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/signup', {
           errorMessage: 'Username and email need to be unique. Either username or email is already used.'
        });
      } else {
        next(error);
      }
 }
})

router.get("/login",(req,res,next)=>{
	res.render("authFolder/login")
})
// async -await  try{}catch(error){}
router.post("/login", async(req,res,next)=>{
//mas codigo
    const {email, password} = req.body
    try {
        // primero validamos
        if(!email){
            return res.render("authFolder/login",{errorMessage:"El campo email debe contener datos"})
        }
        if(!password){
            return res.render("authFolder/login",{errorMessage:"El campo password debe contener datos"})
        }

        const user = await User.findOne({email});
        /**
         *  user = { name:"Dylaln",age:"30",password:"10293092183901283".....}
         */
        if(!user){
            return res.render("authFolder/login",{errorMessage:"Las credenciales son incorrectas"}) //El email no existe
        }
        //comparar password // compare return true | false
        const match = bcrypt.compareSync(password, user.password )

        if(match){
            // vamos a convertir el BSON a un objecto y borrar el password
            const newUser = user.toObject()
            delete newUser.password
            //vamos a guardar el user sin password en el req.session = {}
            req.session.currentUser = newUser
            res.redirect("/user/profile")

        }else{
            res.render("authFolder/login",{errorMessage:"Las credenciales son incorrectas"}) //El email no existe
        }


    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(500).render('auth/login', { errorMessage: error.message });
          } else if (error.code === 11000) {
            res.status(500).render('auth/login', {
               errorMessage: 'Las credenciales son incorrectas'
            });
          } else {
            next(error);
          }
    }
})

router.get("/logout",(req,res,next)=>{
    req.session.destroy((error)=>{
        if(error){
           return  next(error)
        }
        res.redirect("/")
    })
})


module.exports = router