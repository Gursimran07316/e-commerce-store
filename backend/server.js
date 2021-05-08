const express = require("express");
const productRoutes = require("./routes/productRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
dotenv.config();
connectDB();
app.use(cors());

app.use("/api/products", productRoutes);

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use(notFound);
app.use(errorHandler);

app.listen(5000, console.log("Running on port 5000"));
