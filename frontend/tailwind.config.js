module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		colors: {
			bg: {
				DEFAULT: '#141414',
				700: '#0A0A0A'
			},
			text: {
				DEFAULT: '#FFFFFF'
			},
			primary: {
				DEFAULT: '#B9090B'
			},
			gray: {
				DEFAULT: '#CFCFCF'
			},
			transparent: '#00000000',
			overlay: '#1d1e26c7'
		},
		extend: {
			aspectRatio: {
				'2/3': '2 / 3'
			}
		}
	},
	plugins: []
};
