const express = require('express');
const router = express.Router();
const { signupController, loginController } = require('../controllers/authController');

router.get('/login', (req, res) => res.render('login'));
router.get('/signup', (req, res) => res.render('signup'));
router.post('/login', loginController);
router.post('/signup', signupController);

module.exports = router;