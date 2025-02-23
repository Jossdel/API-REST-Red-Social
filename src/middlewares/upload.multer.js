import multer from "multer";

multer.diskStorage((req, file, cb) => {
  destination: cb(null, "uploads/");
  filename: cb(null, Date.now() + file.originalname);
});
const uploads = multer({ storage });
export default uploads;
