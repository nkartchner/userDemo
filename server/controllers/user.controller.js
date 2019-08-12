const User = require('../models/user.model');
const Todo = require('../models/todo.model');

exports.createUser = function(req, res) {
	// HOW TO GET THE ROUTES TO GO HERE?
	User.create({
		name: 'Nick',
		email: 'nick@nick.nick',
		age: 25,
		b_day: new Date(Date.now()),
		friends: []
	})
		.then(data => console.log(data) || res.json(data))
		.catch(err => res.json(err));
};

exports.getUsers = function(req, res) {
	User.find({}, function(err, document) {
		res.json(document);
	});
	//
};

exports.createTodo = function(req, res) {
	Todo.create({
		task: 'Do a demo',
		complete: false,
		dueDate: new Date(Date.now())
	})
		.then(data => res.json(data))
		.catch(err => res.json(err));
};
exports.getTodos = function(req, res) {
	Todo.find()
		.then(data => res.json(data))
		.catch(err => res.json(err));
};
