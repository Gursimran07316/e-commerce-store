const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");
const createOrder = asyncHandler(async (req, res) => {
  const {
    shippingAddress,
    paymentMethod,
    shippingPrice,
    texPrice,
    totalPrice,
    orderItems,
    itemsPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    return;
  } else {
    const order = new Order({
      shippingAddress,
      paymentMethod,
      shippingPrice,
      texPrice,
      totalPrice,
      orderItems,
      itemsPrice,
      user: req.user._id,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
module.exports = { createOrder };
