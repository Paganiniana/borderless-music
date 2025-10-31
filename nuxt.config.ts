import path from "node:path";
// https://nuxt.com/docs/api/configuration/nuxt-config
const hostName = process.env.HOST_NAME || "localhost:3000";
const hostUrl = `https://${hostName}`;

export default defineNuxtConfig({
	devtools: { enabled: true },
	routeRules: {
		// prerender index route by default
		"/": { prerender: true },
	},
	auth: {
		atproto: true,
	},
	modules: ["nuxt-auth-utils"],
	vite: {
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "./components"),
			},
		},
	},
});
