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
	vueMap: {
		/** Options */
	},
	modules: ["nuxt-auth-utils", "nuxt-vue-map-ui"],
});
