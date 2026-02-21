import express from 'express';
const app=express();
app.listen(8080);
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.get("/:id",(req,res)=>{
    const id=req.params.id
    console.log(id)
    res.send(id)

});