const router = require("express").Router();
const {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} = require("../controllers/productControllers");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
module.exports = router;
