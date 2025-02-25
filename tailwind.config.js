/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
	theme: {
		extend: {
			colors: {
        background: 'hsl(var(--background))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
        foreground: 'hsl(var(--foreground))',
				ring: 'hsl(var(--ring))',
				primary: 'hsl(var(--primary))',
        'primary-dark': '#F26E22',
				'blue-light': '#1E4870',
				'blue-base': '#031C33',
				'blue-dark': '#001528',
			},
		},
	},
	plugins: [],
}