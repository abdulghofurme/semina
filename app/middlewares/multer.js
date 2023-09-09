const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  "public/images/u/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const [filename, extension] = file.originalname.split('.')
    cb(null, `${file.fieldname}_${filename}-${uniqueSuffix}.${extension}`);
  },
});

const fileFilter = (res, file, cb) => {
  if (["image/jpg", "image/jpeg", "image/png"].includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      {
        message: "Unsupported file format",
      },
      false
    );
  }
};

const imageMiddleware = multer({
  storage,
  limits: {
    fileSize: 3000000,
  },
  fileFilter,
});

module.exports = imageMiddleware;
