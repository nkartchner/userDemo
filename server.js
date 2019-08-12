const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.set('debug', true);

mongoose.Promise = global.Promise;
mongoose
	.connect('mongodb://localhost:27017/userDemo', { useNewUrlParser: true })
	.then(db => {
		console.log('[SUCCESS] Successfully connected to MongoDb');
	})
	.catch(err => {
		console.log('[ERROR] Something went wrong connecting to the database', err);
		process.exit();
	});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.send(
		'<form action="/api/user" method="post"><button type="submit">Create new user</button></form>'
	);
});
require('./server/routes/user.routes')(app);

app.listen(8000, function() {
	console.log('running userDemo app on port 8000');
});
