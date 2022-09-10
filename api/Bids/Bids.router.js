const { createBids, getBids} = require("./Bids.controller");
const router = require("express").Router();

router.post("/createBids", createBids);
router.get("/getBids", getBids);

module.exports = router;