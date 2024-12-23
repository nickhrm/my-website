/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
	},

	plugins: [
		require('daisyui'),
		require('@tailwindcss/typography'),
	],

	daisyui: {
		themes: ["black", "corporate","nord","cmyk","dark", "sunset"],
	},
}
