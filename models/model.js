const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema(
	{
		full_name: String,
		email: String,
		phone: String,
		state: Boolean,
		id_card_number: String,
		date_of_birth: Date,
		place_of_permanent: String, // đ/c thường trú
		nationality: String,
		ethnic: String, // dân tộc
		religion: String, // tôn giáo
		date_of_idCard: String,
		room: { type: mongoose.Schema.Types.ObjectId, ref: "Rooms" },
	},
	{
		collection: "Customers",
	}
);

const roomSchema = new mongoose.Schema(
	{
		room_id: String,
		price: Number,
		room_type: String,
		note: String,
		state: Boolean,
		image: String,
		floor: { type: mongoose.Schema.Types.ObjectId, ref: "Floors" },
		equipments: [
			{ type: mongoose.Schema.Types.ObjectId, ref: "Equipments" },
		],
		customers: [
			{ type: mongoose.Schema.Types.ObjectId, ref: "Customers" },
		],
	},
	{
		collection: "Rooms",
	}
);

const equipmentSchema = new mongoose.Schema(
	{
		equipment: String,
		quantity: Number,
	},
	{
		collection: "Equipments",
	}
);

const floorSchema = new mongoose.Schema(
	{
		floor_id: String,
		rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Rooms" }],
	},
	{
		collection: "Floors",
	}
);

const contractSchema = new mongoose.Schema(
	{
		check_in_date: Date,
		check_out_date: Date,
		contract_term: Number,
		customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customers" },
		services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Services" }],
	},
	{
		collection: "Contracts",
	}
);

const serviceSchema = new mongoose.Schema(
	{
		content: String,
		price: Number,
	},
	{
		collection: "Services",
	}
);

const paymentSchema = new mongoose.Schema(
	{
		contract: { type: mongoose.Schema.Types.ObjectId, ref: "Customers" },
		Total: Number,
	},
	{
		collection: "Payments",
	}
);

const Customers = mongoose.model("Customers", customerSchema, "Customers");
const Rooms = mongoose.model("Rooms", roomSchema, "Rooms");
const Equipments = mongoose.model("Equipments", equipmentSchema, "Equipments");
const Floors = mongoose.model("Floors", floorSchema, "Floors");
const Contracts = mongoose.model("Contracts", contractSchema, "Contracts");
const Services = mongoose.model("Services", serviceSchema, "Services");
const Payments = mongoose.model("Payments", paymentSchema, "Payments");

module.exports = {
	Customers,
	Rooms,
	Equipments,
	Floors,
	Contracts,
	Services,
	Payments,
};
