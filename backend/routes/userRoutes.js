const router = require("express").Router();
const {
  loginUser,
  getUserProfile,
  registerUser,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/signin").post(loginUser);
router.route("/profile").get(protect, getUserProfile);

module.exports = router;
