const pool = require("../../config/database");

module.exports ={
    createBuyer: (data,callBack) => {
        console.log(data.BuyerfirstName)
        console.log(data.BuyerlastName)
        console.log(data.Buyergender)
        console.log(data.Buyerage)
        console.log(data.Buyeremail)
        console.log(data.Buyerpassword)
        console.log(data.Buyernumber)
        console.log(data.Buyerlocation)


        pool.query(
            `insert into buyer(BuyerfirstName, BuyerlastName, Buyergender, Buyerage, Buyeremail, Buyerpassword, Buyernumber, Buyerlocation) values(?,?,?,?,?,?,?,?)`,
            [
                data.BuyerfirstName,
                data.BuyerlastName,
                data.Buyergender,
                data.Buyerage,
                data.Buyeremail,
                data.Buyerpassword,
                data.Buyernumber,
                data.Buyerlocation,
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
    },


    getBuyer: (callBack) => {
        pool.query(
            `select Buyeremail,Buyerpassword from buyer`,
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



updateBuyer: (data,callBack) => {
    pool.query(
        `update buyer set BuyerfirstName=?, BuyerlastName=?, Buyergender=?, Buyerage=?, Buyeremail=?, Buyerpassword=?, Buyernumber=? Buyerlocation=? where Buyerid=?`,
        [
            data.BuyerfirstName,
            data.BuyerlastName,
            data.Buyergender,
            data.Buyerage,
            data.Buyeremail,
            data.Buyerpassword,
            data.Buyernumber,
            data.Buyerlocation,
            data.Buyerid
            
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deleteBuyer:(data,callBack) => {
        pool.query(
            `delete from buyer where Buyerid= ?`,
            [
                data.Buyerid
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
        },
        loginBuyer:(email,callBack)=>{
            pool.query(
                `select * from buyer where Buyeremail=?`,
                [
                    Buyeremail,
                ],
                    (error,results,fields)=>{
                        if(error){
                           callBack(error);
                        }
                        return callBack(null,results[0]);
                    }
                
            );
        },
};