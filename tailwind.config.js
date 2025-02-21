/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// reference the library only
		'./lib/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				primary: '#F58220',
        'primary-dark': '#F26E22',
				'blue-light': '#1E4870',
				'blue-base': '#031C33',
				'blue-dark': '#001528',
			}
		},
	},
	plugins: [],
}