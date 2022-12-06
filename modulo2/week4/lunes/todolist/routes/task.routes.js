//1)
const express = require("express")
const router = express.Router()
// const router = require("express").Router()
const Task = require("../models/Task.model")//mongoose find,findDelete,findUpdate
//2)
router.get("/",async(req,res,next)=>{
    try{
        //! falta algo promesas await
        const tasks = await Task.find()//-> retorna un [] de todos los documentos
        res.render("task/taskHome",{ tasks} )//<-- es para mostrar mi archivo hbs

    }catch(error){
        next(error)//<--me mandara a la pagina 500 error
    }
})

//crear task
router.post("/create", async(req,res,next)=>{
    // todo lo que mando del frontend en un form en post llega en el BODY
    const {title,description}=req.body
    try{
        //crear Mongoose -> Modelo.create({datos})
        const taskCreated = await Task.create({ title,description})
        console.log("se creo?",taskCreated)
        res.redirect("/task")//es para rutas (baseURL= localhost:3000)
        //baseURl + "/task"

    }catch(error){
        next(error)//<- validar campos con errores
    }
})


//3)
module.exports = router;
