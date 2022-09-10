const {createUser,getusers,updateUser,deleteUser,loginUser, login_}  = require("./registration.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        createUser(body, (err, results)=>{
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

    getusers: (req, res) => {
       
        getusers( (err, results)=>{
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
    updateUser: (req, res) => {
       const body = req.body;
       const salt = genSaltSync(10);
       body.password = hashSync(body.password, salt);
        updateUser(body, (err, results)=>{
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
    deleteUser: (req, res) => {
       const data = req.body;
        deleteUser(data, (err, results)=>{
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
    loginUser:(req,res)=>{
        const body = req.body;
        loginUser(body.email,(err,results)=>{
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