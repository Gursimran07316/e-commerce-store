const router = require("express").Router();
const { createOrder } = require("../controllers/orderControllers");
const { protect } = require("../middleware/authMiddleware");
router.route("/").post(protect, createOrder);
module.exports = router;
