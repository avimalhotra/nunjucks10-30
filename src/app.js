const express=require("express");
const path=require("path");
const nunjucks=require("nunjucks");
const app=express();
require('dotenv').config();
const port=process.env.PORT || 3000;

/* db */
require("./dao");
const [car,pin]=[require('./models/cars'),require('./models/pincode')];

app.use(express.static(path.resolve('src/public')));
app.use(express.static(path.resolve('node_modules/bootstrap/dist')));

// configure
nunjucks.configure(path.resolve('src/public/views'),{
    express:app,
    autoscape:true,
    noCache:false,
    watch:true
});

app.get("/",(req,res)=>{
    res.status(200).render("index.html",{ 
        title:"nunjucks",
        car:{name:"swift",brand:"maruti suzuki"},
        month:["jan","feb","mar","apr"]
    });
});

app.get("/about",(req,res)=>{
    res.status(200).render("about.html",{ title:"About"});
});

app.get("/apicars",(req,res)=>{
    car.find({},{_id:0,__v:0}).then(i=>{
        res.status(200).json(i);
    }).catch(e=>{
        res.status(404).json(e);
    });
});
app.get("/apipins",(req,res)=>{
    pin.find({pincode:201301},{_id:0,__v:0}).then(i=>{
        res.status(200).json(i);
    }).catch(e=>{
        res.status(404).json(e);
    });
});

app.get("/search",(req,res)=>{
    const query=req.query.car;

    car.find({name:new RegExp(query,'i')},{_id:0,__v:0}).then(i=>{
        if(i.length){res.status(200).send(i)}
        else{res.status(200).send([{error:"No car found"}])}
    });

});


app.get("/**",(req,res)=>{
    res.status(404).render("error.html",{ title:"404"});
});


app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});