module.exports = app => {
	const userController = require('../controllers/user.controller');
	app.get('/api/users', userController.getUsers);
	app.post('/api/user', userController.createUser);
	app.post('/api/user/new/todo', userController.createTodo);
	app.get('/api/users/todos', userController.getTodos);
};
