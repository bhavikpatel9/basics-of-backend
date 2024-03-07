const mongoose = require('mongoose');
const studentModel = require('./models/student.model1')

//write code to connect with mongodb

mongoose.connect("mongodb://localhost/demo_db");

const db = mongoose.connection  //start the connection with mongodb

db.on("error",()=>{
    console.log("error while connecting to db")
})

db.once("open",()=>{
    console.log("connected to mongodb successfully")
    //function to insert data in db
    init();
    //fuction to perform CRUD operation
    dbQueries();
})

async function init(){
    //logic to insert data in db
    const student = {
        name : "vishwa",
        age : 30,
        email : "Patelvishwa@gmail.com",
        subjects : ["maths","physics"]
    }
    const std_obj = await studentModel.create(student)
    // console.log(std_obj)
}

async function dbQueries(){
    //if we want to read document by id 
    try{
        const students = await studentModel.findById("65e99e02d121527ff8a56c6c");
        // console.log(students)
    }
    catch(err){
        console.log(err)
    }
    //find by name
    try{
        // const student = await studentModel.find({name : "vishwa"});
        const student = await studentModel.findOne({name : "vishwa"});
        // console.log(student)
    }
    catch(err){
        console.log(err)
    }
    //find using multiple conditions
    try{
        const std = await studentModel.where("age").gt("10").where("name").equals("vishwa").limit(2);
        console.log(std)
    }
    catch(err){
        console.log(err)
    }
    try{
        const st = await studentModel.deleteOne({name:"vishwa"});
        console.log(st)
    }
    catch(err){
        console.log(err)
    }

    }