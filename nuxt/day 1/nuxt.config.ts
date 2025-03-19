import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  plugins: [
    { src: '~/plugins/initApp.ts', mode: 'client' },
    { src: '~/plugins/theme.ts', mode: 'client' },
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})