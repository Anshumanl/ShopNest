const Order = require("../model/Order");

const sendEmail = require("../utils/sendEmail");

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { items, totalAmount, address, paymentId } = req.body;

    if (!items || !items.length || !totalAmount || !address) {
      return res.status(400).json({ message: "Missing required fields" });
    } else {
      const order = new Order({
        user: req.user._id,
        items,
        totalAmount,
        address,
        paymentId,
      });
      await order.save();

      await sendEmail(
        req.user.email,
        "Order Confirmation",
        `Your order has been placed successfully. Order ID: ${order._id}`,
      );
      res.status(201).json({ message: "Order created successfully", order });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create order", error: error.message });
  }
};

//// User ka order fetch karne ke liye function
const myOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate(
      "items.productId",
      "name price",
    );
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};

///// Admin ke liye saare orders fetch karne ke liye function
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "id, name");
    res.status(200).json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch orders", error: error.message });
  }
};

///// Admin ke liye order status update karne ke liye function
const updateOrderStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = status;
      await order.save();
      res
        .status(200)
        .json({ message: "Order status updated successfully", order });
    } else {
      res.status(404).json({ message: "Order not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update order status", error: error.message });
  }
};

module.exports = {
  createOrder,
  myOrders,
  getOrders,
  updateOrderStatus,
};
