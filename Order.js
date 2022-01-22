const mongoose = require('mongoose');
const name = 'Order';

const schema = new mongoose.Schema({
	OrderNumber:{
		type: String,
		required: true
	},
	ItemId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Item'
	},
	Price:{
		type: String,
	},
	CustomerId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Customer'
	},
	DeliveryVehicleId:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'DeliveryVehicle'
	},
	IsDelivered : {
		type: Boolean,
		default: false
	}
});


const model = mongoose.model(name, schema);

module.exports = {
	name: name,
	model: model
}
