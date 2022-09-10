require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./api/registration/registration.router");
const mobileRouter = require("./api/mobile/mobile.router");
const vehicleRouter = require("./api/vehicle/vehicle.router");
const bookRouter = require("./api/book/book.router");
const animalRouter = require("./api/animal/animal.router"); 
const electronicRouter = require("./api/electronic/electronic.router"); 

app.use(express.json());

app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept,Authorization');
    res.header('Access-Control-Allow-Credentials', true);
    next();
})
app.use("/api/registration",userRouter);
app.use("/api/mobile",mobileRouter);
app.use("/api/vehicle",vehicleRouter);
app.use("/api/book",bookRouter);
app.use("/api/animal",animalRouter);
app.use("/api/electronic",electronicRouter);

app.listen(process.env.APP_PORT,()=>{
    console.log("server up and running on PORT: ",process.env.APP_PORT);
});