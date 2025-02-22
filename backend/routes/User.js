const express = require("express");
const { updateScoreAndLevel ,getUserScoreAndLevel} = require("../controllers/Score");

const router = express.Router();

// Route to update score and level
router.post("/updateScore", updateScoreAndLevel);
router.get("/getScore/:userId", getUserScoreAndLevel);

module.exports = router;
