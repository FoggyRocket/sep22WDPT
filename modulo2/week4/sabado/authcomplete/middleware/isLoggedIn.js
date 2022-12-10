

module.exports = (req,res,next)=>{
    //checar si el usuario esta loggeado  y esta intentado entrar a una seccion 
    if(!req.session.currentUser){
        return res.redirect("/auth/signup")
    }
    next()
}