const { createBuyer,getBuyer,updateBuyer,deleteBuyer,login } = require("./Buyer.controller");
const router = require("express").Router();

router.post("/createBuyer",createBuyer);
router.get("/getBuyer",getBuyer);
router.patch("/updateBuyer",updateBuyer);
router.delete("/deleteBuyer",deleteBuyer);
router.post("/login",login);
module.exports = router;