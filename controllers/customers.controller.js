const { Customers } = require("../models/model");

const customerHome = async (req, res, next) => {
	try {
		const customers = await Customers.find();
		res.status(200).json(customers);
	} catch (error) {
		res.status(400).json({ error });
	}
};

module.exports = {
	customerHome,
};
