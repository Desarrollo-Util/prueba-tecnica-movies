const test = require('ava');
const fetch = require('node-fetch');

const app = require('../src/app');

// Env variables
const PORT = 3010;
const ENDPOINT = `http://localhost:${PORT}/register`;

test.before(() => {
	app.listen(PORT, () =>
		console.log(`Servidor de Express levantado en el puerto ${PORT}`)
	);
});

test('Register succesfully', async t => {
	const newUser = {
		id: '9d2dffd6-d656-4284-b419-b62164aaadb3',
		name: 'German',
		email: 'german@gmail.com',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.true(response.ok);
	} catch (err) {
		t.fail(err);
	}
});

test('Register with same id', async t => {
	const newUser = {
		id: '9d2dffd6-d656-4284-b419-b62164aaadb3',
		name: 'German',
		email: 'german4@gmail.com',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.false(response.ok);
		t.is(response.status, 409);
	} catch (err) {
		t.fail(err);
	}
});

test('Register with same email', async t => {
	const newUser = {
		id: '7f613ad3-d279-4c9d-819f-837d15e2743b',
		name: 'German',
		email: 'german@gmail.com',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.false(response.ok);
		t.is(response.status, 409);
	} catch (err) {
		t.fail(err);
	}
});

test('Register with bad id', async t => {
	const newUser = {
		id: '7f613ad3-d279-4c9d-9f-837d15e2743b',
		name: 'German',
		email: 'german@gmail.com',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.false(response.ok);
		t.is(response.status, 400);
	} catch (err) {
		t.fail(err);
	}
});

test('Register with bad name', async t => {
	const newUser = {
		id: '7f613ad3-d279-4c9d-819f-837d15e2743b',
		name: 'German2',
		email: 'german@gmail.com',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.false(response.ok);
		t.is(response.status, 400);
	} catch (err) {
		t.fail(err);
	}
});

test('Register with bad email', async t => {
	const newUser = {
		id: '7f613ad3-d279-4c9d-819f-837d15e2743b',
		name: 'German',
		email: 'german@',
		password: 'test123456'
	};

	try {
		const response = await fetch(ENDPOINT, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newUser)
		});

		t.false(response.ok);
		t.is(response.status, 400);
	} catch (err) {
		t.fail(err);
	}
});

test.after(() => {
	app.close();
});
