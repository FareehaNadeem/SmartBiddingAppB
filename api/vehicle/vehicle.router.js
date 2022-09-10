const { createvehicle, getvehicle, updatevehicle } = require("./vehicle.controller");
const router = require("express").Router();

router.post("/createvehicle", createvehicle);
router.get("/getvehicle", getvehicle);
router.patch("/updatevehicle",updatevehicle);

module.exports = router;