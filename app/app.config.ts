export default defineAppConfig({
  crud: {
    tableHiddenFields: {
      default: ['updated_at', 'updated_by', 'createdBy', 'deleted_at'],
    },
  },
})