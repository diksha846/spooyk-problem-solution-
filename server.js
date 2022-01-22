const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config({ silent: true });
// Setup App
const app = express();
const port = process.env.PORT;


app.use(cors());
app.use(
	bodyParser.urlencoded({
		extended: true,
		limit: '50mb',
	})
);

app.use(
	bodyParser.json({
		limit: '50mb',
	})
);


//Connect To Database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE).then(
	()=>{
		require('./models')();
		require('./routes')(app);

		app.listen(port,()=>{
			console.log(`App running at http://localhost:${port}`);
		});
	},
	(err)=>{
		console.error('Error in connecting db.', err);
	}
);
