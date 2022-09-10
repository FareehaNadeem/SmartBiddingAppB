const {  createBids,getBids } = require("./Bids.service");

const { genSaltSync, hashSync,compareSync} = require("bcrypt");
const {sign}= require("jsonwebtoken")
module.exports = {
    createBids: (req, res) => {
        const body = req.body;
        createBids(body, (err, results) => {
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
getBids: (req, res) => {
       
    getBids( (err, results)=>{
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
};