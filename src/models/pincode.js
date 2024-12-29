const mongoose=require('../dao');

const Schema=mongoose.Schema;

const Pins = new Schema({
    _id:mongoose.ObjectId,
    officeName:String,
    pincode:Number,
    taluk:String,
    districtName:String,
    stateName:String,
},{collection:"pincode"});

const pin=mongoose.model("pins",Pins); 
module.exports=pin;