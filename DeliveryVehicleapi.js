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

// Importing express module
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
const { RegistrationNumber,
VehicleType,
City,
ActiveOrdersCount } = req.body;
const { authorization } = req.headers;
res.send({RegistrationNumber,
	VehicleType,
	City,
	ActiveOrdersCount

});
});

app.listen(8081, () => {
console.log('Our express server is up on port 8081');
});

