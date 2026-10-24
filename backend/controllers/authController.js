const user = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmail = require("../utils/sendEmail");

/// Generate JWT token
// const genereateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
// };

// // Register a new user
// const registerUser = async (req, res) => {
//   const { name, email, password } = req.body;
//   try {
//     const existingUser = await user.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     // Hash the password before saving the user
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const newUser = await user.create({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     if (newUser) {
//       const otp = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit OTP

//       const message = `
//             Welcome to Shopnest ${name}! Your registration was successful.
//             Your OTP for registration is: ${otp}`;

//       await sendEmail(email, "Shopnest Registration OTP", message); // Send the OTP email

//       /// Send the response with user details and token
//       res.status(201).json({
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//         token: genereateToken(newUser._id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid user data" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error registering user", error });
//   }
// };

// // Login user
// const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const existingUser = await user.findOne({ email });

//     if (
//       existingUser &&
//       (await bcrypt.compare(password, existingUser.password))
//     ) {
//       res.json({
//         _id: existingUser._id,
//         name: existingUser.name,
//         email: existingUser.email,
//         role: existingUser.role,
//         token: genereateToken(existingUser._id),
//       });
//     } else {
//       res.status(400).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error logging in user", error });
//   }
// };

// const getUserDetails = async (req, res) => {
//   try {
//     const userDetails = await user.find({}).select('-password');; // Exclude password from the response
//     res.json(userDetails);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching user details", error });
//   }
// };

const genereateToken = (id) => {
    return jwt.sign(
        { id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await user.create({
            name,
            email,
            password: hashedPassword
        });

        if (newUser) {
            // const otp = Math.floor(
            //     100000 + Math.random() * 900000
            // );

            const message = `
            Welcome to Shopnest ${name}!
            Your registration was successful.
            
            `;
// Your OTP for registration is: ${otp}
            await sendEmail(
                email,
                // 'Shopnest Registration OTP',
                message
            );

            res.status(201).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                token: genereateToken(newUser._id)
            });
        } else {
            res.status(400).json({
                message: 'Invalid user data'
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'Error registering user',
            error: error.message
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await user.findOne({ email });

        if (
            existingUser &&
            await bcrypt.compare(password, existingUser.password)
        ) {
            res.json({
                _id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email,
                role: existingUser.role,
                token: genereateToken(existingUser._id)
            });
        } else {
            res.status(400).json({
                message: 'Invalid email or password'
            });
        }

    } catch (error) {
        res.status(500).json({
            message: 'Error logging in user',
            error: error.message
        });
    }
};

const getUserDetails = async (req, res) => {
    try {
        const userDetails = await user.find({}).select('-password');

        res.json(userDetails);

    } catch (error) {
        res.status(500).json({
            message: 'Error fetching user details',
            error: error.message
        });
    }
};



module.exports = { registerUser, loginUser, getUserDetails };
