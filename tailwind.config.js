module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./node_modules/flowbite.{js,ts}",
		'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
	],
	theme: {},
	plugins: [require("flowbite"),require('flowbite/plugin')],
	darkMode: "class",
};
