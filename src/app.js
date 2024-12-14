const express=require("express");
const path=require("path");
const nunjucks=require("nunjucks");
const app=express();
require('dotenv').config();
const port=process.env.PORT || 3000;

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


app.get("/**",(req,res)=>{
    res.status(404).render("error.html",{ title:"404"});
});


app.listen(port,()=>{
    console.log(`App running at http://127.0.0.1:${port}`);
});