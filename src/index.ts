import express from 'express'

const app=express()

app.get('/',(req,res)=>{
    res.send('how are you and hellow world')
})

app.listen(3000,()=>console.log('server is running...........')
)