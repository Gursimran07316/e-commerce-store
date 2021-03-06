const router = require("express").Router();
const {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getTopProducts,
  createProductReview,
} = require("../controllers/productControllers");
const { protect, admin } = require("../middleware/authMiddleware");

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);
router.route("/:id/reviews").post(protect, createProductReview);

module.exports = router;
