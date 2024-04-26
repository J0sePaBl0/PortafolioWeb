/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	"./node_modules/flowbite/**/*.js"
],
	theme: {
			
			extend: {
				maxWidth: {
					'mdd': '30rem',
				  }
			}
	},
	plugins: [
		require('flowbite/plugin')
	],
	 theme: {
		colors: {
		'verdeagua': '#269F87',
		'secundario': '#3C3C3B',
		'grisoscuro': '#1A1E1D',
		},
    container: {
      padding: '2rem',
    },
  },
  
}
