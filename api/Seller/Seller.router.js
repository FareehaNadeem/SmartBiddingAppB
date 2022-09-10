const { createSeller,getSeller,updateSeller,deleteSeller,login } = require("./Seller.controller");
const router = require("express").Router();
const { checkToken } = require("../Auth/validation");

router.post("/createSeller",checkToken, createSeller);
router.get("/getSeller",checkToken, getSeller);
router.patch("/updateSeller",checkToken, updateSeller);
router.delete("/deleteSeller",checkToken, deleteSeller);
router.post("/login",login);
module.exports = router;