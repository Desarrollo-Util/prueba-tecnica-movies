const { EntitySchema } = require('@mikro-orm/core');

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

const userSchema = new EntitySchema({
	class: User,
	properties: {
		id: { type: 'string', primary: true, nullable: false },
		name: { type: 'string', nullable: false },
		email: { type: 'string', unique: true, nullable: false },
		password: { type: 'string', nullable: false }
	}
});

module.exports = { User, userSchema };
