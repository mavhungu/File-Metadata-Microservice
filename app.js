const express = require('express')
const path = require('path')
const multer = require('multer')
const hbs = require('hbs')

const port = process.env.PORT || 3000

const app = express()

const home = require('./router/home') 

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartials(path.join(__dirname,'templates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',home)


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})