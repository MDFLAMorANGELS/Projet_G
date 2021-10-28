const express = require('express');
const userControllers = require('../controllers/usercontrollers');
const router = express.Router();

// route POST  - /user/
router.route("/signup")
.post(userControllers.signup);

module.exports = router;