import { eq } from 'drizzle-orm'

export async function getUserPermissions(userId: number) {
  const rows = await db
    .select({
      resourceName: schema.resources.name,
      permissionCode: schema.permissions.code,
    })
    .from(schema.users)
    .leftJoin(schema.roles, eq(schema.users.roleId, schema.roles.id))
    .leftJoin(schema.roleResourcePermissions, eq(schema.roleResourcePermissions.roleId, schema.roles.id))
    .leftJoin(schema.resources, eq(schema.roleResourcePermissions.resourceId, schema.resources.id))
    .leftJoin(schema.permissions, eq(schema.roleResourcePermissions.permissionId, schema.permissions.id))
    .where(eq(schema.users.id, Number(userId)))
    .all()

  return rows.reduce((acc, row) => {
    // A user with no role, or a role with no permissions, produces rows
    // where the joined columns are null — skip those rather than adding
    // an entry with an undefined key.
    if (!row.resourceName || !row.permissionCode) return acc

    acc[row.resourceName] ??= []
    acc[row.resourceName]?.push(row.permissionCode)
    return acc
  }, {} as Record<string, string[]>)
}
