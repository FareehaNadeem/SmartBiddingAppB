const {  createvehicle,getvehicle,updatevehicle } = require("./vehicle.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createvehicle: (req, res) => {
        const body = req.body;
        createvehicle(body, (err, results) => {
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
getvehicle: (req, res) => {
       
    getvehicle( (err, results)=>{
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
updatevehicle: (req, res) => {
    const body = req.body;
  
     updatevehicle(body, (err, results)=>{
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
};