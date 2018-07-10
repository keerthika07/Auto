var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var prodSchema = new mongoose.Schema({
    proName: String,
    proPrice: Number
});
var User = mongoose.model("User", prodSchema, "users");
module.exports=User;
