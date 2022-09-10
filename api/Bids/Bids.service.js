const pool = require("../../config/database");

module.exports = {
    createBids: (data, callBack) => {
    pool.query(
        `insert into Bids(Buyerbids, animaltitle, animalprice,booktitle,bookprice,electronictitle,electronicprice,
         mobilebrandname,mobileprice,vehicletitle,vehicleprice) values(?,?,?,?,?,?,?,?,?,?,?) where Buyerid=?, productid= ?`,
        [
            data.Buyerbids,
            data.animaltitle,
            data.animalprice,
            data.booktitle,
            data.bookprice,
            data.electronictitle,
            data.electronicprice,
            data.mobilebrandname,
            data.mobileprice,
            data.vehicletitle,
            data.vehicleprice,
            data.Buyerid,
            data.productid,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
    03
},

getBids: (callBack) => {
    pool.query(
        `select bidID, Mybid, price from Bids`,
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
};