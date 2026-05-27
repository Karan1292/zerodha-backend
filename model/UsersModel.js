const {model}= require("mongoose");

const {userSchema}= require("../schemas/UsersSchema");

const userModel=new model("user",userSchema);

module.exports={userModel};