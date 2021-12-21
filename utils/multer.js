const multer = require("multer");
const path = require("path");

module.exports = multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb) => {
		let ext = path.extname(file.originalname);
		if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
			cb(new Error("File type is not supported"), false);
			return;
		}
		cb(null, true);
	},
});

// {
// 		destination: function (req, file, cb) {
// 			cb(null, "./public/uploads");
// 		},
// 		filename: function (req, file, cb) {
// 			cb(null, file.originalname);
// 		},
// 	}
