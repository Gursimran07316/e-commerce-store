const router = require("express").Router();
const {
  createOrder,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderControllers");
const { protect } = require("../middleware/authMiddleware");
router.route("/").post(protect, createOrder);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").get(protect, updateOrderToPaid);
module.exports = router;
