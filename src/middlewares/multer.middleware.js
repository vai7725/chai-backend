import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, done) {
    done(null, "./public/temp");
  },
  filename: function (req, file, done) {
    done(null, file.originalname);
  },
});

export const upload = multer({ storage });
