const express = require('express');
const userControllers = require('../controllers/usercontrollers');
const router = express.Router();
const auth = require('../middleware/auth');

// route POST  - /user/
router.route("/signup")
.post(userControllers.signup);

router.route("/login")
.post(userControllers.login);

router.route("/")
.get(auth, userControllers.getUserInfo);

module.exports = router;