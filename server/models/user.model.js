const mongoose = require('mongoose');
const Todo = require('./todo.model');
var UserSchema = new mongoose.Schema(
	{
		// Make a random change bla bla lafklsdjf;lkasdjfklj
		name: String,
		email: String,
		age: Number,
		b_day: Date,
		friends: [Todo.schema]
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
