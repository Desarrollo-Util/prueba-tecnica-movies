const { getEntityManager } = require('./config/initialize-orm');
const { User } = require('./entities/user');

class UserRepository {
	constructor() {
		this._entityManager = getEntityManager();
		this._userRepository = this._entityManager.getRepository(User);
	}

	findById(id) {
		return this._userRepository.findOne({ id });
	}

	findByEmail(email) {
		return this._userRepository.findOne({ email });
	}

	async create(user) {
		const newUser = await this._userRepository.create(user);
		this._userRepository.persist(newUser);
	}

	commit() {
		return this._entityManager.flush();
	}
}

module.exports = UserRepository;
