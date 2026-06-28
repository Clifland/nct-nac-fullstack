// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  modules: ['@nuxt/ui', '@nuxthub/core', 'nuxt-auto-crud', 'nuxt-crud-table'],
  hub: {
    db: 'sqlite'
  }
})