const mongoose=require('../dao');

const Schema=mongoose.Schema;

const Car = new Schema({
    _id:mongoose.ObjectId,
    name:{type:String,required:true, unique: true, dropDups:true},
    type:{type:String,required:true, unique: true},
    price:{type:Number, required:true, min:1, max:5000000}
},{collection:"suzuki"});

const car=mongoose.model("cars",Car); 
module.exports=car;