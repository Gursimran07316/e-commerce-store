const router = require("express").Router();
const {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
} = require("../controllers/orderControllers");
const { protect, admin } = require("../middleware/authMiddleware");
router.route("/").post(protect, createOrder).get(protect, getMyOrders);
router.route("/all").get(protect, admin, getOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").get(protect, updateOrderToPaid);
module.exports = router;
