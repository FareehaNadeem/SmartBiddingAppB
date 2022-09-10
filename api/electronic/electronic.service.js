const pool = require("../../config/database");

module.exports = {
    createelectronic: (data, callBack) => {
    pool.query(
        `insert into product(id,category,electronictitle,electronicprice,electronicdescription,electroniclocation,electronicbrand) values(?,?,?,?,?,?)`,
        [
            data.id,
            data.category,
            data.electronictitle,
            data.electronicprice,
            data.electronicdescription,
            data.electroniclocation,
            data.electronicbrand,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
},
getelectronic: (callBack) => {
    pool.query(
        `select productid,category,electronictitle,electronicprice,electronicdescription,electroniclocation,electronicbrand from product where category=3`,
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
updateelectronic: (data,callBack) => {
    pool.query(
        `update product set electronictitle=?, electronicprice=?, electronicdescription=?, electroniclocation=?, electronicbrand=? where electronicid=?`,
        [
            data.electronictitle,
            data.electronicprice,
            data.electronicdescription,
            data.electroniclocation,
            data.electronicbrand,
            data.electronicid
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deleteelectronic:(data,callBack) => {
        pool.query(
            `delete from product where electronicid= ?`,
            [
                data.electronicid
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