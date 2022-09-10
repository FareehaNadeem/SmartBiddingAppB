const pool = require("../../config/database");

module.exports = {
    createanimal: (data, callBack) => {
    pool.query(
        `insert into product(id,category,animaltitle,animaltype,animalprice,animaldescription,animallocation) values(?,?,?,?,?,?)`,
        [
            data.id,
            data.category,
            data.animaltitle,
            data.animaltype,
            data.animalprice,
            data.animaldescription,
            data.animallocation,
        ],
        (error, results, fields) => {
            if (error) {
               return callBack(error);
            }
            return callBack(null, results)
        }
    );
},
getanimal: (callBack) => {
    pool.query(
        `select productid,animaltitle,animaltype,animalprice,animaldescription,animallocation from product where category=1`,
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
updateanimal: (data,callBack) => {
    pool.query(
        `update product set animaltitle=?,animaltype=?,animalprice=?,animaldescription=?,animallocation=? where animalid=?`,
        [
            data.animaltitle,
            data.animaltype,
            data.animalprice,
            data.animaldescription,
            data.animallocation,
            data.animalid
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deleteanimal:(data,callBack) => {
        pool.query(
            `delete from product where animalid= ?`,
            [
                data.animalid
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