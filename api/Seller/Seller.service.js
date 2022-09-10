const pool = require("../../config/database");

module.exports ={
    createSeller: (data,callBack) => {
          console.log(data.firstName)
        console.log(data.lastName)
        console.log(data.gender)
        console.log(data.age)
        console.log(data.email)
        console.log(data.password)
        console.log(data.number)
        console.log(data.location)


        pool.query(
            `insert into seller(firstName, lastName, gender, age, email, password, number, location) values(?,?,?,?,?,?,?,?)`,
            [
                data.firstName,
                data.lastName,
                data.gender,
                data.age,
                data.email,
                data.password,
                data.number,
                data.location,
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
    },


    getSeller: (callBack) => {
        pool.query(
            `select email,password from seller`,
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



updateSeller: (data,callBack) => {
    pool.query(
        `update seller set firstName=?, lastName=?, gender=?, age=?, email=?, password=?, number=? location=? where sellerID=?`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.age,
            data.email,
            data.password,
            data.number,
            data.location,
            data.sellerID
            
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deleteSeller:(data,callBack) => {
        pool.query(
            `delete from seller where sellerID= ?`,
            [
                data.sellerID
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
        },
        loginSeller:(email,callBack)=>{
            pool.query(
                `select * from seller where email=?`,
                [
                    email,
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
 