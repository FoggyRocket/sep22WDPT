//expres
const router = require("express").Router();
//importar los modelos que voy a utlizar
const Toon = require("../models/Toon.model");
const Tvshow = require("../models/Tvshow.model");
const mongoose = require("mongoose")
/**
 * Create
 * Read
 * Update
 * Delete
 */
/*GET root TVShow Read */
router.get("/",(req,res,next)=>{

    Tvshow.find()
    .populate("_cast","name studio")
    .then((tvshows)=>{
        console.log("tvshows",tvshows[1])
        res.render("tvshow/tvshowList",{ tvshows})
    })
    .catch(error=>next(error))
  
})

// Crear tvshow 

router.get("/create",(req,res,next)=>{
    Toon.find()
    .then((toons)=>{
                                //{toons:toons}
        res.render("tvshow/new",{ toons})
    })
    //next Error mandar a la vista de error
    .catch((error)=>next(error))
})

router.post("/create",(req,res,next)=>{
    const { fieldN, arraySeason  ,arrayIds } = req.body
    const data = {
        name:fieldN,
        _cast:arrayIds
    }

    // arraySeason.length != 0
    if(arraySeason.length){
        //data.season = arraySeason.split(",")
        data["season"] = arraySeason.split(",")
    }

    Tvshow.create(data)
    .then((tvshowCreated)=>{
        res.redirect("/")
    })
    .catch((error)=>{
        if(error instanceof mongoose.Error.ValidationError){
          return  res.status(400).render("tvshow/new", { errorMessage: error.message })
        }
        if(error.code === 11000){
          return  res.status(400).render("tvshow/new", { errorMessage: "mensaje de error" })
        }
            //500 -> pagina error
        return  next(error)
      })
})


// Update
//async - await
router.get("/:idTvshow/edit", async(req,res,next)=>{
    //idTvshow
    const { idTvshow } = req.params
    try{
        const tvshow = await Tvshow.findById(idTvshow)
        const toons = await Toon.find()

        res.render("tvshow/edit",{tvshow, toons})

    }catch(error){
        next(error)
    }
});

router.post("/:idTvshow/edit",async(req,res,next)=>{
    const { fieldN, arraySeason  ,arrayIds } = req.body
    const data = {
        name:fieldN,
        _cast:arrayIds
    }
    const { idTvshow } = req.params
    if(arraySeason.length){
        //data.season = arraySeason.split(",")
        data["season"] = arraySeason.split(",")
    }
    try {

        const tvshowUpdated = await Tvshow.findByIdAndUpdate(idTvshow,data,{new:true})
        console.log("actualizado",tvshowUpdated)
        res.redirect("/tvshow")


    } catch (error) {
        next(error)
    }
})


//Delete
router.get("/:idTvshow/delete", async (req,res,next)=>{
    const { idTvshow } = req.params
    try{
        await Tvshow.findByIdAndDelete(idTvshow)
        res.redirect("/tvshow")
    }catch(error){
        next(error)
    }
})



module.exports = router;