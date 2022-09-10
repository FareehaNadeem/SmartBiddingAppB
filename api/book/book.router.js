const { createbook, getbook, updatebook, deletebook } = require("./book.controller");
const router = require("express").Router();

router.post("/createbook", createbook);
router.get("/getbook", getbook);
router.patch("/updatebook",updatebook);
router.delete("/deletebook",deletebook);

module.exports = router;