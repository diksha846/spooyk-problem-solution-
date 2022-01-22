const mongoose = require('mongoose');
const name = 'Item';

const schema = new mongoose.Schema({
	Name:{
		type: String,
		required: true
	},
	Price:{
		type: Number,
		required: true
	},
});


const model = mongoose.model(name, schema);

module.exports = {
	name: name,
	model: model
}
