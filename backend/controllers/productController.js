const { model } = require("mongoose");
const Product = require("../model/product");
const cloudinary = require("../config/cloudinary");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});         
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);      
        if (product) {
            res.json(product);     
        } else {
            res.status(404).json({ message: "Product not found" });
        }   

    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }   

};

const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        let imageUrl = "";
        if (req.file) {
            const result = await cloudinary.uploader.upload(req.file.path);
            imageUrl = result.secure_url; // Store the Cloudinary URL
        }
        const newProduct = new Product({
            name,
            description,    
            price,
            category,
            stock,
            imageUrl, // Store the Cloudinary URL
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    
}   catch (error) {     
        res.status(500).json({ message: "Server Error" });
    }   
};

const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const product = await Product.findById(req.params.id);
        if (product) {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.stock = stock || product.stock;
           
            if(req.file) {
                const result = await cloudinary.uploader.upload(req.file.path);
                product.imageUrl = result.secure_url; // Update the Cloudinary URL
            }
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};



const deleteProduct = async (req, res) => {

    try {

        // URL se product ID le rahe hain
        const product = await Product.findById(req.params.id);

        // Check kar rahe hain ki product exist karta hai ya nahi
        if (product) {

            // Product ko ID ke basis par delete kar rahe hain
            await Product.findByIdAndDelete(req.params.id);

            // Successful response
            res.json({ message: "Product removed" });

        } else {

            // Agar product nahi mila
            res.status(404).json({ message: "Product not found" });
        }

    } catch (error) {

        // Actual error console mein dekhne ke liye
        console.log("Delete Product Error:", error.message);

        // Server error response
        res.status(500).json({ message: "Server Error" });
    }
};

module.exports = {  
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};