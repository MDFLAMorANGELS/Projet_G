const express = require('express');
const commentControllers = require('../controllers/commentcontrollers');
const router = express.Router();

// route GET & POST  - /post/
router.route("/")
.get(commentControllers.getAllComment)
.post(commentControllers.createNewComment);

module.exports = router;