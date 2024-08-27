const express = require('express');
const multer = require('multer');
const path = require('path');
const User = require('../models/User');

const router = express.Router();

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${Date.now()}-${file.originalname}`);
//     }
// });

// const upload = multer({ storage });
//first change
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
//till here
router.post('/signup', upload.single('resume'), async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!req.file) {
            throw new Error('Resume file is missing.');
        }
        const resumeUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        const user = new User({ name, email, resumeUrl });
        await user.save();

        res.status(201).json({ message: 'User signed up successfully', user });
    } catch (err) {
        console.error('Error saving user to MongoDB:', err.message);
        res.status(500).json({ message: 'Error signing up user', error: err.message });
    }
});


module.exports = router;
