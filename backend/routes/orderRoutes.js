const router = require("express").Router();
const {
  createOrder,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered,
} = require("../controllers/orderControllers");
const { protect, admin } = require("../middleware/authMiddleware");
router.route("/").post(protect, createOrder).get(protect, getMyOrders);
router.route("/all").get(protect, admin, getOrders);
router.route("/:id").get(protect, getOrderById);
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);
module.exports = router;
