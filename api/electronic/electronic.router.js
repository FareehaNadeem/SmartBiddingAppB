const { createelectronic, getelectronic, updateelectronic,deleteelectronic } = require("./electronic.controller");
const router = require("express").Router();

router.post("/createelectronic", createelectronic);
router.get("/getelectronic", getelectronic);
router.patch("/updateelectronic",updateelectronic);
router.delete("/deleteelectronic",deleteelectronic);
module.exports = router;