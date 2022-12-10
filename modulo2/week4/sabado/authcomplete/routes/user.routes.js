const router = require("express").Router()
const User = require("../models/User.model")


router.get("/profile",(req,res,next)=>{
    res.render("userFolder/profile")
})


module.exports = router