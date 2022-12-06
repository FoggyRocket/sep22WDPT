//1)importar
const {Schema,model} = require("mongoose")
//2)Definir los campos del modelo
const taskSchema = new Schema({
    //datos
    title:{
        required:[true,"Coloca un titulo para la tarea"], //<- custom message
        type:String,
        minLength:2
    },
    description:{
        type:String,
        minLength:2,
        required:[true,"Coloca un descripcion para la tarea"],
    },
    isComplete:{
        type:Boolean,
        default:false
    }
    /**
     * lo usaremos mas tarde
     * _owner:{}
     */
},{timestamps:true})
//? timestamps => para colocar la fecha de creacion y actualizacion (server)
//3)Exportar
module.exports = model("Task",taskSchema)