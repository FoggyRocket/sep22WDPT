
// 1) importar con destructuracion
const { Schema,model  } = require("mongoose")


// 2) definir los campos de mi model
const tvshowSchema = new Schema({
    //todos mis campos!!!
    //2.1) colocar campos
    name:{
        type:String,
        unique:true,
        required:true
    },
    season:{
        type:[Number],//type:[1,2,3,4,5 ],  || [string] ["pero","gato","pato"], [{ name,cast,age }]
        default:[1],
    },
    _cast:[ //<-- con [] defino que almacenara muchos id 
        { //_nambreCampo para indicar que esto es una referencia
        type: Schema.Types.ObjectId,//<- con esto definimos una referecia
        ref:"Toon"//<- indicamos a que modelo le pertenece el id 
        }
    ] 
    
},{
    timestamps:true
})

//3) exportar!! **

module.exports = model("Tvshow",tvshowSchema)


