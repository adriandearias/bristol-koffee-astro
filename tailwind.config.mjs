/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
		colors: {
			customYellow: '#f6c645',
			customGray: '#f6f4ef',
			customBlack: '#3a3933',
			customWhite: '#ffffff',
			customBrown: '#2e2d26'
		},
	},
	plugins: [],
}
