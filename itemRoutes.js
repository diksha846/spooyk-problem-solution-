const Item = require('../models/Item').model;

module.exports = (app)=>{
	app.post('/items', async (req, res, next)=>{
		try {
			if(!req.body.Name || !req.body.Price){
				res.status(400).json('Missing params');
			}
			const newItem = new Item(req.body);
			await newItem.save();
			res.status(200).json(newItem);
		} catch(exec) {
			res.status(exec.code).json(exec.error);
		}
	});


	app.get('/items', async (req, res, next)=>{
		try {
			const result = await Item.find({}).exec();
			res.status(200).json(result);
		} catch(exec) {
			res.status(exec.code).json(exec.error);
		}
	});
}
