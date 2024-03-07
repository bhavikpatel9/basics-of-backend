//define the schema of student collection to be stored in mongodb
const mongoose = require("mongoose")


//schema
const studentSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        min : 19
    },
    email : {
        type : String,
        required : true,
        lowercase : true
    },
    subjects : [String],
    createdAt : {
        type : Date,
        immutable : true,
        default : ()=>{
            return Date.now()
        }
    }
   
},{versionKey : false, timestamps : true})

//go ahead and create corresponding collection on db
module.exports = mongoose.model("Student",studentSchema)