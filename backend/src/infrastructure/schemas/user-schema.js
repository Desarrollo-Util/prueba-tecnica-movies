const { EntitySchema } = require('@mikro-orm/core');
const User = require('../../domain/entities/user');

const userSchema = new EntitySchema({
	class: User,
	properties: {
		id: { type: 'string', primary: true, nullable: false },
		name: { type: 'string', nullable: false },
		email: { type: 'string', unique: true, nullable: false },
		password: { type: 'string', nullable: false }
	}
});

module.exports = userSchema;
