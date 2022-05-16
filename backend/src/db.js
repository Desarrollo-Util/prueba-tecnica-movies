const { User } = require('./entities/user');

const findUserById = async (entityManager, id) => {
	const userRepository = entityManager.getRepository(User);
	const user = await userRepository.findOne({ id });

	return user;
};

const findUserByEmail = async (entityManager, email) => {
	const userRepository = entityManager.getRepository(User);
	const user = await userRepository.findOne({ email });

	return user;
};

const addUser = async (entityManager, user) => {
	const userRepository = entityManager.getRepository(User);
	const newUser = await userRepository.create(user);
	userRepository.persist(newUser);
};

module.exports = { findUserById, findUserByEmail, addUser };
