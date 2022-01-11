const express = require('express');
const commentControllers = require('../controllers/commentcontrollers');
const router = express.Router();
const auth = require('../middleware/auth');

// route GET & POST  - /post/
router.route("/:postID")
.post(auth, commentControllers.createNewComment);

router.route('/')
.get(auth, commentControllers.getAllComment);

module.exports = router;