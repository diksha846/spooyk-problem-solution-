
// Importing express module
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
const { Name,City } = req.body;
const { authorization } = req.headers;
res.send({Name,City 

});
});

app.listen(8081, () => {
console.log('Our express server is up on port 8081');
});
