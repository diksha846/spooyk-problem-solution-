const mongoose = require('mongoose');
const name = 'DeliveryVehicle';

const schema = new mongoose.Schema({
	RegistrationNumber:{
		type: String,
		required: true
	},
	VehicleType:{
		type: String,
		enum: ['Bike','Truck'],
		required: true
	},
	City:{
		type: String,
	},
	ActiveOrdersCount:{
		type: Number,
		default: 0,
		max: 2
	},
});


const model = mongoose.model(name, schema);

module.exports = {
	name: name,
	model: model
}
