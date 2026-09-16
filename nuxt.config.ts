// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  compatibilityDate: "2025-07-15",
  css: [
    "@picocss/pico/css/pico.css",
  ],
  nitro: {
    // Nitro options can be specified here when needed
  },
  eslint: {
    config: {
      stylistic: {
        semi: true,
        quotes: "double",
        indent: 2,
        commaDangle: "always-multiline",
      },
    },
  },
});
