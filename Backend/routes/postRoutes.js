const express = require('express');
const postControllers = require('../controllers/postcontrollers');
const router = express.Router();
const auth = require('../middleware/auth');

// route GET & POST  - /post/
router.route("/")
.get(auth, postControllers.getAllPost)
.post(auth, postControllers.createNewPost);

router.route("/:id")
.get(postControllers.getPostById);

module.exports = router;