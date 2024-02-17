/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
		backgroundImage: {
			'image-bg-1' : "url('../src/img/bg-nen.png')",
			'image-bg-2' : "url('../src/img/bg-nen-2.png')",
			'image-bg-3' : "url('../src/img/bg-nen-3.png')"
		}
	},
  },
  plugins: [],
}

