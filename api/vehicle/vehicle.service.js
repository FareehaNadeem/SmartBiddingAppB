const pool = require("../../config/database");

module.exports = {
    createvehicle: (data, callBack) => {
    pool.query(
        `insert into product(id,category,vehicletitle, vehicletype,vehiclelocation ,vehiclebrand, vehiclemodel, vehicleprice, year, kmsdriven, fuel) values(?,?,?,?,?,?,?,?,?,?,?)`,
        [
            data.id,
            data.category,
            data.vehicletitle,
            data.vehicletype,
            data.vehiclelocation,
            data.vehiclebrand,
            data.vehiclemodel,
            data.vehicleprice,
            data.year,
            data.kmsdriven,
            data.fuel,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
},
getvehicle: (callBack) => {
    pool.query(
        `select productid,category,vehicletitle, vehicletype, vehiclebrand, vehiclemodel, vehicleprice, year, kmsdriven, fuel from product where category=5`,
        [
   
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
},
updatevehicle: (data,callBack) => {
    pool.query(
        `update product set vehicletitle=?, vehicletype=?, vehiclebrand=?, vehiclemodel=?, vehicleprice=?, year=?, kmsdriven=?, fuel=? where vehicleid=?`,
        [
            data.vehicletitle,
            data.vehicletype,
            data.vehiclebrand,
            data.vehiclemodel,
            data.vehicleprice,
            data.year,
            data.kmsdriven,
            data.fuel,
            data.vehicleid
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deletevehicle:(data,callBack) => {
        pool.query(
            `delete from product where vehicleid= ?`,
            [
                data.vehicleid
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
        },
};