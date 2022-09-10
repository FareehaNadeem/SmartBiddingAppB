const {  createanimal,getanimal,updateanimal,deleteanimal } = require("./animal.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createanimal: (req, res) => {
        const body = req.body;
        createanimal(body, (err, results) => {
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
getanimal: (req, res) => {
       
    getanimal( (err, results)=>{
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
updateanimal: (req, res) => {
    const body = req.body;
  
     updateanimal(body, (err, results)=>{
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
 deleteanimal: (req, res) => {
    const data = req.body;
     deleteanimal(data, (err, results)=>{
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
             message: "animal deleted succefully"
         });
     });
 },
};