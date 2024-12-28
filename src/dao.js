const mongoose = require('mongoose');
const Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/node10');

const db=mongoose.connection;

db.on('error', function (err) { throw err }); 

db.once('open', function() {
   console.log('mongoose connected!');

   /* Schema */
const Car=new Schema({
  _id:mongoose.ObjectId,
  name:{type:String, required:true, unique:true, dropDups:true},
  type:{type: String, required:true},
  price:{type:Number, min:100000, max:2000000}
},{collection:'suzuki'});

/* model */
const car=mongoose.model("car",Car);


car.find({type:"hatchback"}).then(i=>console.log(i)).catch(e=>console.warn(e));


})


    
/* main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/node');
    // await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');    //if auth enabled

  console.log("Db Connected");
} */