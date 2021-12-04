const express = require('express')
const path = require('path')
const multer = require('multer')
const hbs = require('hbs')

const upload = multer({
    limits:{
        fileSize: 2000000
    },
    fileFilter(req, file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload image file'))
        }
        cb(undefined, true)
    }
});

const port = process.env.PORT || 3000

const app = express()

const home = require('./router/home')
const fileAnalyse = require('./router/fileanalyseRouter')

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'templates/views'))
hbs.registerPartials(path.join(__dirname,'templates/partials'))

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/',home)
app.post('/api/profile',upload.single('upfile'),fileAnalyse)


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})