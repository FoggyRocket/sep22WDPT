

            //roles=[]
            //["Admin"] || ["Admin","Staff"] || ["Staff" ,"User"]
module.exports = (roles)=>{

    return (req,res,next)=>{
        /**
         *  currentUser = {
         *  name:"Dylan",
         *  role:"Staff"
         * }
         */
        const {role} = req.session.currentUser

        if(roles.includes(role)){
            next()
        }else{
            return res.redirect("/")
        }
    }
}