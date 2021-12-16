const { Rooms } = require("../models/model");

const roomHome = async (req, res) => {
	try {
		const rooms = await Rooms.find().populate("floor");
		res.status(200).json(rooms);
	} catch (error) {
		res.status(400).json(error);
	}
};

const viewRoom = async (req, res) => {
	const room = await Rooms.findById(req.params.id);
	res.json(room);
};

module.exports = {
	roomHome,
	viewRoom,
};
