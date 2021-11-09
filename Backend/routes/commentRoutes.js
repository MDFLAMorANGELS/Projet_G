const express = require('express');
const commentControllers = require('../controllers/commentcontrollers');
const router = express.Router();

// route GET & POST  - /post/
router.route("/:postID")
.post(commentControllers.createNewComment);

router.route('/')
.get(commentControllers.getAllComment);

module.exports = router;