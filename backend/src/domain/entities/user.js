class User {
	/**
	 * @param {string} id User identifier
	 * @param {string} name User name and surname
	 * @param {string} email User email
	 * @param {string} password User hashed password
	 */
	constructor(id, name, email, password) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
	}
}

module.exports = User;
