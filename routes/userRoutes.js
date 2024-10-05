const express = require('express');
const authenticateJWT = require('../middleware/auts');
const router = express.Router();
const UserController = require('../controllers/userControllers');


router.get('/',(req,res)=>{
    console.log("Hellow world")
});

router.post('/reg',UserController.register);
router.post('/login',UserController.login);

router.get('/profile', authenticateJWT, (req, res) => {
    res.json({ status: true, user: req.user });
});

module.exports = router;