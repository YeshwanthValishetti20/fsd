const express = require('express')
// const bodyParser=require('body-parser')
const mongoose = require('mongoose')
const cors=require('cors')
// const alienRouter=require('aliens')
// const url = 'mongodb://127.0.0.1:27017/shop'
const url = 'mongodb+srv://yeshwanth:1234@cluster0.dfcanxe.mongodb.net/'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(4000, () =>
{
console.log('Server started')
})