// const express = require("express"); 
// const cors = require("cors");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db")
// dotenv.config();


// connectDB(); 

// const app = express();
// app.use(cors());

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//     res.send("Shopnest Backend is working properly");
// });

// app.use('/api/auth', require('./routes/authRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`)
// })


// Express framework ko import kar rahe hain
// Express ki help se hum server aur API routes bana sakte hain


const express = require("express");

// CORS ko import kar rahe hain
// CORS frontend aur backend ko different origins se communicate karne deta hai
const cors = require("cors");

// dotenv ko import kar rahe hain
// .env file ke environment variables ko access karne ke liye use hota hai
const dotenv = require("dotenv");

// MongoDB se connection establish karne wala function import kar rahe hain
const connectDB = require("./config/db");

// .env file ke variables ko application mein load kar raha hai
dotenv.config();


// MongoDB database se connection establish kar rahe hain
connectDB();


// Express application create kar rahe hain
const app = express();


// CORS enable kar rahe hain
// Isse frontend application backend API ko access kar sakti hai
app.use(cors());


// Incoming JSON data ko read karne ke liye middleware
// Example: { "name": "Anshuman", "email": "test@gmail.com" }
app.use(express.json());


// Form data ko read karne ke liye middleware
// extended: true ka matlab nested objects bhi parse kar sakta hai
app.use(express.urlencoded({ extended: true }));


// Ye root/home API route hai
// Jab browser ya client "/" URL ko hit karega to ye message milega
app.get("/", (req, res) => {
    res.send("Shopnest Backend is working properly");
});


// Authentication se related saare routes ko /api/auth ke andar mount kar rahe hain
// authRoutes file mein register, login etc. ke routes defined honge
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/payment", require("./routes/paymentRoutes")); 
app.use("/api/analytics", require("./routes/analyticsRoutes")); 


// Environment variable se PORT le rahe hain
// Agar .env mein PORT nahi hai to default port 5000 use hoga
const PORT = process.env.PORT || 5000;


// Server ko specified PORT par start kar rahe hain
// Server successfully start hone ke baad console mein message print hoga
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



