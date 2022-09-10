const {  createbook,getbook,updatebook,deletebook } = require("./book.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createbook: (req, res) => {
        const body = req.body;
        createbook(body, (err, results) => {
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
getbook: (req, res) => {
       
    getbook( (err, results)=>{
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
updatebook: (req, res) => {
    const body = req.body;
  
     updatebook(body, (err, results)=>{
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
 deletebook: (req, res) => {
    const data = req.body;
     deletebook(data, (err, results)=>{
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
             message: "book deleted succefully"
         });
     });
 },
};