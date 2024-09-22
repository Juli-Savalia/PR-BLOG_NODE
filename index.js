const express = require("express");
const app = express()
const port = 8000 ;

const connectDB = require("./config/db");
connectDB();

app.set('view engine','ejs');
app.use(express.urlencoded());//its a middleware that makes the data available in the req.body..
app.use(express.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')))//without this css wont be attached to your app..

const cookieParser = require('cookie-parser')
app.use(cookieParser());

app.use('/',require('./routes/indexRoutes'))//main route and will always come after cookie..

app.use('/uploads',express.static(path.join(__dirname,"uploads")));//used for the images

app.listen(port,(err) =>{
    if(err) console.log(err);

    console.log(`Your Server has successfully started on the port:- ${port}`)
})
