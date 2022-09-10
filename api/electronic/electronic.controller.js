const {  createelectronic,getelectronic,updateelectronic,deleteelectronic } = require("./electronic.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createelectronic: (req, res) => {
        const body = req.body;
        createelectronic(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connenction error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
        });
    });
},
getelectronic: (req, res) => {
       
    getelectronic( (err, results)=>{
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
updateelectronic: (req, res) => {
    const body = req.body;
  
     updateelectronic(body, (err, results)=>{
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
 deleteelectronic: (req, res) => {
    const data = req.body;
     deleteelectronic(data, (err, results)=>{
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
             message: "electronic deleted succefully"
         });
     });
 },
};