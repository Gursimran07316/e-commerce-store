const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");
const dotenv = require("dotenv");
const path = require("path");
const uploadRoutes = require("./routes/uploadRoutes");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const _dirname = path.resolve();
app.use("/uploads", express.static(path.join(_dirname, "/uploads")));
app.use(notFound);
app.use(errorHandler);

app.listen(5000, console.log("Running on port 5000"));
