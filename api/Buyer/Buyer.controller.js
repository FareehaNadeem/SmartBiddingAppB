const {createBuyer,getBuyer,updateBuyer,deleteBuyer,loginBuyer}  = require("./Buyer.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createBuyer: (req, res) => {
        const body = req.body;
        createBuyer(body, (err, results)=>{
            if(err){
               console.log(err);
               return res.status(500).json({
                success: 0,
                message: "Database connection error"
               });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },

    getBuyer: (req, res) => {
       
        getBuyer( (err, results)=>{
            if(err){
               console.log(err);
               return res.status(500).json({
                success: 0,
                message: "Record Not Found"
               });
            }
            return res.status(200).json({
                success: 1,
                data: results,
            });
        });
    },
    updateBuyer: (req, res) => {
       const body = req.body;
       const salt = genSaltSync(10);
       body.password = hashSync(body.password, salt);
        updateBuyer(body, (err, results)=>{
            if(err){
               console.log(err);
               return false;
            }
            if(!results){
                return res.json({
                    success: 0,
                    message:"failed to update"
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Updated Successfully"
            });
        });
    },
    deleteBuyer: (req, res) => {
       const data = req.body;
        deleteBuyer(data, (err, results)=>{
            if(err){
               console.log(err);
               return;
            }
            if(!results){
                return res.json({
                    success:  0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                message: "user deleted succefully"
            });
        });
    },
    loginBuyer:(req,res)=>{
        const body = req.body;
        loginBuyer(body.email,(err,results)=>{
            if(err){
                console.log(err);
            }
            if(!results){
                return res.json({
                    success: 0,
                    data:"Invalid email or password"
                });
           
         }
         const result = compareSync(body.password,results.password);
         if(result){
            result.password= undefined;
            const jsontoken = sign({result: results},"qwe1234",{
                expiresIn:"1h"
            });
            return res.json({
                success: 1,
                message: "login successful",
                token : jsontoken
            });
         }
         else{
            return res.json({
                success: 0,
                data: "Invalid email or password"
            });
         }
        });
    },
    };