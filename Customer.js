const mongoose = require('mongoose');
const name = 'Customer';

const schema = new mongoose.Schema({
	Name:{
		type: String,
		required: true
	},
	City:{
		type: String,
		required: true
	},
});


const model = mongoose.model(name, schema);

module.exports = {
	name: name,
	model: model
}
