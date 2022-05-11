const { EntitySchema } = require('@mikro-orm/core');

class User {
	/**
	 * @param {string} name
	 * @param {string} email
	 */
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
}

const userSchema = new EntitySchema({
	class: User,
	properties: {
		name: { type: 'string' },
		email: { type: 'string', primary: true }
	}
});

module.exports = { User, userSchema };
