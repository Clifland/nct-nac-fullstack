export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['nuxt-crud-table', '@nuxt/ui', '@nuxthub/core', 'nuxt-auto-crud', 'nuxt-auth-utils'],
  hub: {
    db: 'sqlite'
  },
  nitro: {
    experimental: {
      tasks: true
    }
  },
  crudTable: {
    auth: {
      authentication: 'nuxt-auth-utils',
      // authorization: "nuxt-crud-permissions",
    }
  },
  autoCrud: {
    relationsPath: 'server/db/relations',
    auth: {
      authentication: true,
      authorization: true,
    }
  },
})
