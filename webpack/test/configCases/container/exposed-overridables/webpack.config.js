// eslint-disable-next-line n/no-unpublished-require
const { ModuleFederationPlugin } = require("../../../../").container;

/** @type {import("../../../../").Configuration} */
module.exports = {
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			filename: "container.js",
			exposes: {
				"./Button": "./Button"
			},
			shared: {
				react: {
					eager: true
				}
			}
		})
	]
};
