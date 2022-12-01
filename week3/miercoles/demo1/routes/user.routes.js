/**
 * C:reate
 * R:ead
 * U:pdate
 * D:elete
 */

const express = require("express");
const router = express.Router();
// importar mi modelo que voy a utilizar
const User = require("../models/User.model");

/* GET localhost:3000/user/ page */
router.get("/", (req, res, next) => {
    //Model.find() --> busca a todos los documentos dentro de esa collection
  User.find()
  .then(users =>{          //{users:users}
                           //{users: [] }
    res.render("user/listUsers",{ users });
  })
  .catch(error=>next(error))
});
// Ver un formulario
// localhost:3000/user/create
router.get("/create",(req,res,next)=>{
    // res.render("archivo") ---> nivel root views
    // res.render("carpeta/archivo") --> dentro de otra carpeta en views
    res.render("user/createUser")
})
//tener datos en el server (front al back)
router.post("/create",(req,res,next)=>{
    // req.body Modelo.create({datos})
    // create(req.body)
    // create({...req.body})
    /*
        const {name,hobby,age,...restBody} = req.body
        create({name,hobby,age})
    */
    User.create(req.body)
    .then((userCreated)=>{
        console.log("el usario",userCreated)
        //localhost:3000/user
        res.redirect("/user") //<-- mandar a otra vista o redireccionar
    })
    .catch(error=> next(error))
})

//una ruta con params :nombreParam
//vamos por uno 
router.get("/:id/detail",(req,res,next)=>{
    // const { id } = req.params
    //Model.findById
    User.findById(req.params.id)
    .then( user =>{
        res.render("user/userDetail", { user })
    })
    .catch(error=> next(error))
})

module.exports = router;
