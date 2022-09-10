const pool = require("../../config/database");

module.exports ={
    createUser: (data,callBack) => {
        console.log(data.firstName)
        console.log(data.lastName)
        console.log(data.gender)
        console.log(data.age)
        console.log(data.email)
        console.log(data.password)
        console.log(data.number)
        console.log(data.location)


        pool.query(
            `insert into registration(firstName, lastName, gender, age, email, password, number, location) values(?,?,?,?,?,?,?,?)`,
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



  getusers  : (callBack) => {
        pool.query(
            `select email,password from registration`,
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



updateUser: (data,callBack) => {
    pool.query(
        `update registration set firstName=?, lastName=?, gender=?, age=?, email=?, password=?, number=? location=? where id=?`,
        [
            data.firstName,
            data.lastName,
            data.gender,
            data.age,
            data.email,
            data.password,
            data.number,
            data.location,
            data.id
            
        ],
        (error, results, fields) =>{
            if(error){
            return callBack(error);
            }
            return callBack(null, results);
        },
     );
    },
    deleteUser:(data,callBack) => {
        pool.query(
            `delete from registration where id= ?`,
            [
                data.id
            ],
            (error, results, fields) =>{
                if(error){
                return callBack(error);
                }
                return callBack(null, results);
            }
         );
        },
        loginUser:(email,callBack)=>{
            pool.query(
                `select * from registration where email=?`,
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