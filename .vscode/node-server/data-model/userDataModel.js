//use mongoose to make connection to mongodb
//get schema object created and also develop data model to be used in api
//set validations and data types in schema
//although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack"); 

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required:true},
    street: String,
    mobile: Number
},{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

let UserModel = mongooseObj.model("user",userSchema);//user - collection name, pluralised by mongodb

module.exports = UserModel;//this should be used in userRouter to build user api's