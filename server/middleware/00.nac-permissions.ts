export default defineEventHandler(async (event) => {
  const model = nacGetModelFromPath(event.path)
  if (!model) return // not a NAC route — nothing to do

  const { user, secure } = await getUserSession(event)
  if (!user) return // unauthenticated — nac-guard's own logic decides what happens next

  event.context.nac = {
    ...event.context.nac,
    userId: user.id,
    resourcePermissions: secure?.permissions[model] ?? [],
  }
})
