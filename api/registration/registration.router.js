const { createUser,getusers,updateUser,deleteUser,loginUser } = require("./registration.controller");
const router = require("express").Router();

router.post("/createUser",createUser);
router.get("/getuser",getusers);
router.patch("/updateUser",updateUser);
router.delete("/deleteUser",deleteUser);
router.post("/loginUser",loginUser);
module.exports = router;