const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./model/User");
const Product = require("./model/product");
const Order = require("./model/Order");

dotenv.config();

const products = [
	{
		name: "Classic White Sneakers",
		description: "Everyday low-top sneakers with a clean, versatile design.",
		price: 59.99,
		category: "Footwear",
		stock: 24,
		imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
	},
	{
		name: "Canvas Weekend Backpack",
		description: "A durable canvas backpack with room for daily essentials.",
		price: 42.5,
		category: "Accessories",
		stock: 18,
		imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62",
	},
	{
		name: "Everyday Analog Watch",
		description: "Minimal analog watch with a comfortable adjustable strap.",
		price: 89,
		category: "Accessories",
		stock: 12,
		imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
	},
	{
		name: "Cotton Crewneck T-Shirt",
		description: "Soft cotton crewneck tee for comfortable everyday wear.",
		price: 24.99,
		category: "Clothing",
		stock: 40,
		imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
	},
	{
		name: "Insulated Travel Bottle",
		description: "Reusable stainless steel bottle that keeps drinks cold or hot.",
		price: 19.5,
		category: "Home & Lifestyle",
		stock: 30,
		imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
	},
];

const users = [
	{ name: "Alex Morgan", email: "alex@example.com", role: "user" },
	{ name: "Jamie Lee", email: "jamie@example.com", role: "user" },
	{ name: "Taylor Reed", email: "taylor@example.com", role: "user" },
	{ name: "Shop Admin", email: "admin@shopnest.test", role: "admin" },
];
const demoPassword = "Demo123!";

const orderSeeds = [
	{
		paymentId: "SEED-ORDER-001",
		userEmail: "alex@example.com",
		status: "delivered",
		address: {
			fullName: "Alex Morgan",
			street: "123 Sample Street",
			city: "Seattle",
			postalCode: "98101",
			country: "United States",
		},
		items: [
			{ productName: "Classic White Sneakers", quantity: 1 },
			{ productName: "Cotton Crewneck T-Shirt", quantity: 2 },
		],
	},
	{
		paymentId: "SEED-ORDER-002",
		userEmail: "jamie@example.com",
		status: "shipped",
		address: {
			fullName: "Jamie Lee",
			street: "45 Demo Avenue",
			city: "Portland",
			postalCode: "97201",
			country: "United States",
		},
		items: [{ productName: "Canvas Weekend Backpack", quantity: 1 }],
	},
	{
		paymentId: "SEED-ORDER-003",
		userEmail: "taylor@example.com",
		status: "processing",
		address: {
			fullName: "Taylor Reed",
			street: "78 Example Road",
			city: "Denver",
			postalCode: "80202",
			country: "United States",
		},
		items: [
			{ productName: "Everyday Analog Watch", quantity: 1 },
			{ productName: "Insulated Travel Bottle", quantity: 1 },
		],
	},
];

const seedDatabase = async () => {
	if (!process.env.MONGO_URI) {
		throw new Error("MONGO_URI is missing. Add it to backend/.env before seeding.");
	}

	await mongoose.connect(process.env.MONGO_URI);

	const result = await Product.bulkWrite(
		products.map((product) => ({
			updateOne: {
				filter: { name: product.name },
				update: { $setOnInsert: product },
				upsert: true,
			},
		}))
	);

	const hashedPassword = await bcrypt.hash(demoPassword, 10);
	const userResult = await User.bulkWrite(
		users.map((user) => ({
			updateOne: {
				filter: { email: user.email },
				update: {
					$setOnInsert: { ...user, password: hashedPassword, verified: true },
				},
				upsert: true,
			},
		}))
	);

	const savedUsers = await User.find({}).select("-password").lean();
	const savedProducts = await Product.find({}).lean();
	const usersByEmail = new Map(savedUsers.map((user) => [user.email, user]));
	const productsByName = new Map(savedProducts.map((product) => [product.name, product]));

	const orderResult = await Order.bulkWrite(
		orderSeeds.map((order) => {
			const items = order.items.map(({ productName, quantity }) => {
				const product = productsByName.get(productName);
				return { productId: product._id, quantity, price: product.price };
			});

			return {
				updateOne: {
					filter: { paymentId: order.paymentId },
					update: {
						$setOnInsert: {
							user: usersByEmail.get(order.userEmail)._id,
							items,
							totalAmount: items.reduce((total, item) => total + item.price * item.quantity, 0),
							address: order.address,
							paymentId: order.paymentId,
							status: order.status,
						},
					},
					upsert: true,
				},
			};
		})
	);

	const savedOrders = await Order.find({})
		.populate("user", "name email")
		.populate("items.productId", "name price")
		.lean();

	console.log(
		`Seed complete: added ${result.upsertedCount} products, ${userResult.upsertedCount} users, and ${orderResult.upsertedCount} orders.`
	);
	console.log("Users:", JSON.stringify(savedUsers, null, 2));
	console.log("Products:", JSON.stringify(savedProducts, null, 2));
	console.log("Orders:", JSON.stringify(savedOrders, null, 2));
	console.log("Demo login credentials:");
	console.log(`Admin: admin@shopnest.test / ${demoPassword}`);
	console.log(`User: alex@example.com / ${demoPassword}`);
};

seedDatabase()
	.catch((error) => {
		console.error("Seed failed:", error.message);
		process.exitCode = 1;
	})
	.finally(async () => {
		await mongoose.disconnect();
	});
