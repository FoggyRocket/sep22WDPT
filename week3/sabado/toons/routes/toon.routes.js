//1) importar
const express = require('express');
//utlizar
const router = express.Router();
//imporar mi modelo
const Toon = require("../models/Toon.model")
const mongoose = require("mongoose")
//2)  Crear rutas "/toon" + las que se creen


/*GET Root /toon simbolo => "/" */
//localhost:3000/toons/
router.get("/",(req,res,next)=>{
  //todos los personajes de mi base
  // Model.find()
  Toon.find()
  .then(toons=>{
                              //{toons:toons}
    res.render("toon/toonList", { toons})
  })
  .catch(error=>next(error))
})
/* GET create para mostrar el form */
router.get("/create", (req, res, next) => {
    // render("folder/file")
    //"dylan/document/toons/views/"
  res.render("toon/new");//render es para los archivos en las views 
});
// POST para mandar o recibir datos
router.post("/create", (req,res,next)=>{
    // req.body => Es todo lo que mandan de un form del frontend al backend 
    //test
    //request -> usiaro
    // response -> server
    // Model.method().then().catch()
    const { name,catchPhrase,studio, ...restBody } = req.body
    Toon.create({
      name,
      catchPhrase,
      studio
    }).then((toonCreated)=>{
        //voy a hacer un redirect 
        res.redirect("/")
    }).catch((error)=>{
      if(error instanceof mongoose.Error.ValidationError){
        return  res.status(400).render("toon/new", { errorMessage: error.message })
      }
      if(error.code === 11000){
        return  res.status(400).render("toon/new", { errorMessage: "mensaje de error" })
      }
          //500 -> pagina error
      return  next(error)
    })

})


//3) exportamos 
module.exports = router;
