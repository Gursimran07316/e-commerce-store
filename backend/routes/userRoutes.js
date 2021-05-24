const router = require("express").Router();
const {
  loginUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsersList,
  deleteUser,
  getUserById,
  editUser,
} = require("../controllers/userControllers");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").post(registerUser);
router.route("/signin").post(loginUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router.route("/admin").get(protect, admin, getUsersList);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById);

router.route("/edit").put(protect, admin, editUser);
module.exports = router;
