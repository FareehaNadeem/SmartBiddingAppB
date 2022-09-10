const {  createmobile,getmobile,updatemobile,getmobilebymobileid } = require("./mobile.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createmobile: (req, res) => {
        const body = req.body;
        createmobile(body, (err, results) => {
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
getmobile: (req, res) => {
       
    getmobile( (err, results)=>{
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
updatemobile: (req, res) => {
    const body = req.body;
  
     updatemobile(body, (err, results)=>{
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
getmobilebymobileid: (req, res) => {
    const mobileid = req.params.mobileid;
    getmobilebymobileid(mobileid, (err, results) => {
        if(err){
            console.log(err);
            return; 
        }
        if(!results){
            return res.json({
                success: 0,
                message:"Result not found"
            });
        }
        return res.json({
            success: 1,
            data: results
        });
    });
}

};