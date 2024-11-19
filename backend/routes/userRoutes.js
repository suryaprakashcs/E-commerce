const express = require("express");
const { registerUser, loginUser ,getUserProfile,getUser} = require("../controllers/userController");
const { protect }  = require('../middleWare/authMiddleware');
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/profile", protect,getUserProfile);
router.get("/getAll", getUser);

module.exports = router;
