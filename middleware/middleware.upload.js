const multer = require("multer");

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
      callback(null, "./public/uploads");
    },
    filename: function(req, file, callback) {
      callback(null, Date.now() + file.originalname);
    }
  });
    
  const upload = multer({
    storage: storage
  }).single("employeeImage");

  module.exports=upload