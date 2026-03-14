import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app=express()
const PORT=process.env.PORT
const startServer=()=>{
    app.listen(PORT,()=>{
        console.log(`Server Started ON port ${PORT}`)
    })
}
app.use('/admin/products',productRouter)
startServer()