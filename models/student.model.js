//define the schema of student collection to be stored in mongodb
const mongoose = require("mongoose")


//schema
const studentSchema = mongoose.Schema({
    name : String,
    age : Number
})

//go ahead and create corresponding collection on db
//"Student" is collection name
module.exports = mongoose.model("Student",studentSchema)