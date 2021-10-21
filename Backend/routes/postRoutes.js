const express = require('express');
const postControllers = require('../controllers/postcontrollers');
const router = express.Router();

// route GET & POST  - /post/
router.route("/")
.get(postControllers.getAllPost)
.post(postControllers.createNewPost);

router.route("/:id")
.get(postControllers.getPostById);

module.exports = router;