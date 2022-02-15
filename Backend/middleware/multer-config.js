const multer = require('multer');

const MIME_TYPES = {
  'image/gif': 'gif',
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    if (extension === undefined) {
      callback(new Error('file extension not supported'), false)
    } else {
      callback(null, name + Date.now() + '.' + extension);
    }
  }
});

module.exports = multer({storage: storage}).single('image');