const { Rooms } = require("../models/model");
const cloudinary = require("../utils/cloudinary");

const roomHome = async (req, res) => {
	try {
		const rooms = await Rooms.find().populate("floor");
		res.status(200).json(rooms);
	} catch (error) {
		res.status(500).json(error);
	}
};

const viewRoom = async (req, res) => {
	try {
		const room = await Rooms.findById(req.params.id);
		res.status(200).json(room);
	} catch (error) {
		res.status(500).json(error);
	}
};

const postRoom = async (req, res) => {
	var image = await cloudinary.uploader.unsigned_upload(
		req.file.path,
		"oeaxhoph"
	);
	req.body.image = image.secure_url;
	try {
		const room = await Rooms.create(req.body);
		res.json(room);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	roomHome,
	viewRoom,
	postRoom,
};
