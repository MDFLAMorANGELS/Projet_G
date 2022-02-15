const express = require('express');
const postControllers = require('../controllers/postcontrollers');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// route GET & POST  - /post/
router.route("/")
.get(auth, postControllers.getAllPost)
.post(auth, multer, postControllers.createNewPost);

router.route("/:id")
.get(postControllers.getPostById)
.delete(auth,postControllers.deletePost);



module.exports = router;