const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const dotenv = require("dotenv");

dotenv.config();


router.post("/register" , async (req,res) => {
    try {
        const { name, email, password } = req.body;
    
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ error: "User already exists" });
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
    
        res.status(201).json({ message: "User registered successfully", user });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
})



router.post("/login" , async (req,res) => {

    try {
        const { email, password } = req.body;
    
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(404).json({ error: "Invalid email or password" });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ error: "Invalid email or password" });
        }
    
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1m",
        });
    
        res.json({ message: "Login successful", token });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

})

module.exports = router