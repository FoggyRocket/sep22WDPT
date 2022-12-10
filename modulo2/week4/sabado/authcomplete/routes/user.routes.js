const router = require("express").Router()
const User = require("../models/User.model")
const isLoggedIn = require("../middleware/isLoggedIn")
const checkRole = require("../middleware/checkRole")
router.get("/profile",isLoggedIn,(req,res,next)=>{

    console.log("req.session:",req.session)
    /**
     *  validamos la navbar *** 
     *  mandamos datos del usuario
     */
    const user = req.session.currentUser
    res.render("userFolder/profile",{ user })
})
                                //* ** */
router.get("/admin",isLoggedIn,checkRole(["Admin"]) ,async(req,res,next)=>{
    try {
        const user = req.session.currentUser
                                    // Queris avanzandos        project
        const users = await User.find({ $nor:[{role:"Admin"}] },{ password:0 })
        res.render("userFolder/listUsers",{users, user})
    } catch (error) {
        console.log("error",error)
        next(error)
    }
})


module.exports = router