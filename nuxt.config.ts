export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['nuxt-crud-table', '@nuxt/ui', '@nuxthub/core', 'nuxt-auto-crud', 'nuxt-auth-utils'],
  hub: {
    db: 'sqlite'
  },
  autoCrud: {
    relationsPath: 'server/db/relations'
  },
  css: ['~/assets/css/main.css'],
  crudTable: {
    auth: {
      authentication: 'nuxt-auth-utils'
    }
  }
})