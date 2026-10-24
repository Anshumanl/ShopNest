const Order = require("../model/Order");
const User = require("../model/User");
const Product = require("../model/product");

const getAdminStats = async (req, res) => {
  try {
    const totalUsers = await User.countDocuments({ role: "user" });
    const totalOrders = await Order.countDocuments({});
    const totalProducts = await Product.countDocuments({});

    const orders = await Order.find({});

    const totalRevenue = orders.reduce(
      (total, item) => total + Number(item.totalAmount || 0),
      0
    );

    return res.status(200).json({
      totalUsers,
      totalOrders,
      totalProducts,
      totalRevenue,
    });
  } catch (error) {
    console.error("Analytics Error:", error);

    return res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

module.exports = { getAdminStats };