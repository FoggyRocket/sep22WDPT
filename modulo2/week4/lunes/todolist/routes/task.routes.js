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

router.post("/:id/complete",async(req,res,next)=>{
    const { id }  = req.params
    const isComplete = true
    try {                                   // (id,{datosAmodificar},{new:true})
        const taskUpdated = await Task.findByIdAndUpdate(id,{isComplete},{new:true})
        console.log("se actualizo?",taskUpdated)
        res.redirect("/task")
    } catch (error) {
        next(error)
    }
})
router.get("/:id/delete",async(req,res,next)=>{
    const { id }  = req.params
    try {
        await Task.findByIdAndDelete(id)
        res.redirect("/task")
    } catch (error) {
        next(error)
    }
})


router.get("/:id/edit",async(req,res,next)=>{
    const {id} = req.params
    try {

        const taskEdit = await Task.findById(id)//<- es para llenar los campos con los datos a editar
        const tasks = await Task.find()
        res.render("task/taskHome",{ tasks, taskEdit, isEdit:true })
        
    } catch (error) {
        next(error)
    }
})

router.post("/:id/edit",async(req,res,next)=>{
    const {id} = req.params
    //req.body = { ...datos }
    const {isComplete} = req.body
    try {
        const taskUpdated2 = await Task.findByIdAndUpdate(id,{...req.body,
                                                                isComplete: isComplete === "on" ?true :false 
                                                            },{new:true} );
        console.log("task 2", taskUpdated2)
        res.redirect("/task")
        //res.json(req.body)
    } catch (error) {
        next(error)
    }
})




//3)
module.exports = router;
