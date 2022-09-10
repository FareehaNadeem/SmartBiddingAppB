const pool = require("../../config/database");

module.exports = {
    createbook: (data, callBack) => {
    pool.query(
        `insert into product(id,category,booktitle,bookprice,booktype,bookcondition,genre,bookdescription,booklocation) values(?,?,?,?,?,?,?,?)`,
        [
            data.id,
            data.category,
            data.booktitle,
            data.bookprice,
            data.booktype,
            data.bookcondition,
            data.genre,
            data.bookdescription,
            data.booklocation,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
},
getbook: (callBack) => {
    pool.query(
        `select productid,booktitle,bookprice,booktype,bookcondition,genre,bookdescription,booklocation from product where category=2`,
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
updatebook: (data,callBack) => {
    pool.query(
        `update product set booktitle=?,bookprice=?,booktype=?,bookcondition=?,genre=?,bookdescription=?,booklocation=? where bookid=?`,
        [
            data.booktitle,
            data.bookprice,
            data.booktype,
            data.bookcondition,
            data.genre,
            data.bookdescription,
            data.booklocation,
            data.bookid
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deletebook:(data,callBack) => {
        pool.query(
            `delete from product where bookid= ?`,
            [
                data.bookid
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