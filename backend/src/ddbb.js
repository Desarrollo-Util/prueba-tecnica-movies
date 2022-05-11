const users = [];

const findUserById = id => users.find(user => user.id === id);

const findUserByEmail = email => users.find(user => user.email === email);

const addUser = user => users.push(user);

module.exports = { findUserById, findUserByEmail, addUser };
