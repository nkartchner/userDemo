const mongoose = require('mongoose');
const Todo = require('./todo.model');
var UserSchema = new mongoose.Schema(
	{
		name: String,
		email: String,
		age: Number,
		b_day: Date,
		friends: [Todo.schema]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
