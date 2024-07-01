// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', "nuxt-svgo"],

  plugins: [
    '~/plugins/vue-awesome-paginate.ts'
  ],

  css: ['~/assets/scss/main.scss'],

  app: {
    head: {
      title: 'Qtim',
      link: [
        { rel: "icon", type: "image/png", href: "/logo.svg" }
      ]
    }
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/_variables.scss";
            @import "~/assets/scss/_mixins.scss";
          `,
        },
      },
    },
  },
})