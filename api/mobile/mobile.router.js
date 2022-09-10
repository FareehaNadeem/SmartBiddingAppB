const { createmobile, getmobile, updatemobile,getmobilebymobileid } = require("./mobile.controller");
const router = require("express").Router();

router.post("/createmobile", createmobile);
router.get("/getmobile", getmobile);
router.patch("/updatemobile",updatemobile);
router.get("getmobilebymobileid/:mobileid", getmobilebymobileid);

module.exports = router;