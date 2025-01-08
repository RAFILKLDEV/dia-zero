/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
	theme: {
		extend: {
			colors: {
				blue: "#006DFC",
				darkBlue: "#0066CC",
			},
			screens: {
				xs: { max: "480px" },
				md: { max: "768px" },
			},
		},
	},
	plugins: [],
};
