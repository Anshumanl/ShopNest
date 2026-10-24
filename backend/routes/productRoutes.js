const express = require('express');

const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary storage for uploaded files

const router = express.Router();

router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProduct);
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);


module.exports = router; 



// // Express framework ko import kar rahe hain
// // Iski help se hum routes aur API endpoints create karenge
// const express = require("express");


// // protect middleware ko import kar rahe hain
// // Ye check karega ki user login/authenticated hai ya nahi
// const { protect } = require("../middleware/authMiddleware");


// // admin middleware ko import kar rahe hain
// // Ye check karega ki logged-in user admin hai ya nahi
// const { admin } = require("../middleware/adminMiddleware");


// // Product controller ke functions ko import kar rahe hain
// // Ye functions actual product ka logic handle karenge
// const {
//     getProducts,
//     getProductById,
//     createProduct,
//     updateProduct,
//     deleteProduct
// } = require("../controllers/productController");


// // Express ka router object create kar rahe hain
// // Is router ke andar product se related saare routes define honge
// const router = express.Router();


// // "/" route
// //
// // GET /
// // → Saare products ko get karega
// // → Iske liye login ki zarurat nahi hai
// //
// // POST /
// // → Naya product create karega
// // → Pehle protect check karega user login hai ya nahi
// // → Phir admin check karega user admin hai ya nahi
// // → Sab checks pass hone ke baad createProduct chalega
// router.route("/")
//     .get(getProducts)
//     .post(protect, admin, createProduct);


// // "/:id" route
// //
// // :id ek dynamic value hai
// // Example: /api/products/123
// //
// // GET /:id
// // → Particular product ko ID ke basis par get karega
// //
// // PUT /:id
// // → Product update karega
// // → User login hona chahiye
// // → User admin hona chahiye
// //
// // DELETE /:id
// // → Product delete karega
// // → User login hona chahiye
// // → User admin hona chahiye
// router.route("/:id")
//     .get(getProductById)
//     .put(protect, admin, updateProduct)
//     .delete(protect, admin, deleteProduct);


// // Router ko export kar rahe hain
// // Is router ko server.js ya app.js mein use kiya ja sakta hai
// module.exports = router;
