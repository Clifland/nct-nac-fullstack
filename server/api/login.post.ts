import { eq } from 'drizzle-orm'
import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, loginSchema.parse)

  const user = await db.select().from(schema.users).where(eq(schema.users.email, email)).get()

  if (!user || !(await verifyPassword(user.password ?? '', password))) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' })
  }

  // Fetch mapped user permissions
  const permissions = await getUserPermissions(user.id)

  const sessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    permissions,
    createdAt: user.createdAt,
  }

  await setUserSession(event, {
    user: sessionUser,
    secure: { permissions },
    loggedInAt: new Date(),
  })

  return { user: sessionUser }
})
