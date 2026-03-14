import express from 'express'
const app=express()
const startServer=()=>{
    app.listen(5000,()=>{
        console.log("Server Started")
    })
}
app.use('/admin/products',productRouter)
startServer()