const { createanimal, getanimal, updateanimal,deleteanimal } = require("./animal.controller");
const router = require("express").Router();

router.post("/createanimal", createanimal);
router.get("/getanimal", getanimal);
router.patch("/updateanimal",updateanimal);
router.delete("/deleteanimal",deleteanimal);

module.exports = router;