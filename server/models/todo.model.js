const mongoose = require('mongoose');

var TodoSchema = new mongoose.Schema({
	task: String,
	complete: Boolean,
	dueDate: Date
});

module.exports = mongoose.model('Todo', TodoSchema);
