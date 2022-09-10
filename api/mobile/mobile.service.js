const pool = require("../../config/database");

module.exports = {
    createmobile: (data, callBack) => {
    pool.query(
        `insert into product(id,category,mobilebrandname,cellcondition,mobiledescription,mobilelocation,quality,mobileprice) values(?,?,?,?,?,?,?)`,
        [
            data.id,
            data.category,
            data.mobilebrandname,
            data.cellcondition,
            data.mobiledescription,
            data.mobilelocation,
            data.quality,
            data.mobileprice,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
},
getmobile: (callBack) => {
    pool.query(
        `select productid,mobilebrandname,cellcondition,mobiledescription,mobilelocation,quality,mobileprice from product where category=4`,
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
updatemobile: (data,callBack) => {
    pool.query(
        `update product set mobilebrandname=?,cellcondition=?,mobiledescription=?,mobilelocation=?,quality=?,mobileprice=? where mobileid=?`,
        [
            data.mobilebrandname,
            data.cellcondition,
            data.mobiledescription,
            data.mobilelocation,
            data.quality,
            data.mobileprice,
            data.mobileid
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    /*getmobilebymobileid: (mobileid, callBack) =>{
        pool.query(
            'select * where mobileid=?',
            [mobileid],
            (error, results, fields) =>{
                if(error){
                    callBack(error);
                }
                return callBack(null,results[0]);
            }
        );
    },*/
    deletemobile:(data,callBack) => {
        pool.query(
            `delete from product where mobileid= ?`,
            [
                data.mobileid
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