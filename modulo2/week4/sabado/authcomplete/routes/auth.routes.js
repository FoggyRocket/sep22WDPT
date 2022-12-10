const router = require("express").Router()
const User = require("../models/User.model")
const bcrypt = require("bcrypt")

const saltRound = 12;

router.get("/signup",(req,res,next)=>{
    res.render("authFolder/signup")
})

// async await - try catch()
router.post("/signup",async (req,res,next)=>{
                                                    //restBody={role}
    const { password, confirmPassword, email,username ,...restBody} = req.body
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
    const userCreated = await User.create({ email,username, password:passwordHashed })
    //config mongos-conect y session-store
    console.log("user:",userCreated)    
    res.redirect("/")
 
 } catch (error) {
    next(error)
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
            res.status(200).json({user})
        }else{
            res.render("authFolder/login",{errorMessage:"Las credenciales son incorrectas"}) //El email no existe
        }


    } catch (error) {
        next(error)
    }
})


module.exports = router