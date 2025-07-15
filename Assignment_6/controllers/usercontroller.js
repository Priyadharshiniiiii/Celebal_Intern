const users = require('../models/userModel');

// Create a user
exports.createUser = (req, res) => {
    const { name, email } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
};

// Get all users
exports.getUsers = (req, res) => {
    res.json(users);
};

// Get a single user by ID
exports.getUserById = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
};

// Update a user
exports.updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: 'User not found' });

    const { name, email } = req.body;
    user.name = name || user.name;
    user.email = email || user.email;

    res.json(user);
};

// Delete a user
exports.deleteUser = (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'User not found' });

    users.splice(index, 1);
    res.status(204).send();
};
