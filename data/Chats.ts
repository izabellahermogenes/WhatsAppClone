export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Iza',
		imageUri: 'https://i.pravatar.cc/200?img=1',

	}, {
		id: 'u2',
		name: 'Lukas',
		    imageUri: 'https://i.pravatar.cc/200?img=2',

	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Lukas!',
		createdAt: '2025-07-10T12:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Iza',
		},
	}, {
		id: 'm2',
		content: 'I am good, good',
		createdAt: '2025-07-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2025-07-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the stream now.',
		createdAt: '2025-07-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Iza',
		},
	}, {
		id: 'm5',
		content: 'How is your uni going?',
		createdAt: '2025-07-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Iza',
		},
	}, {
		id: 'm6',
		content: 'It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?',
		createdAt: '2025-07-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Lukas',
		},
	}, {
		id: 'm7',
		content: 'Big Data is really interesting. Cannot wait to go through all the material.',
		createdAt: '2025-07-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Iza',
		},
	}]
}