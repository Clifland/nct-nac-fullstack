import { defineRelations } from 'drizzle-orm'
import * as schema from './schema' // Adjust the path to match your schema location

export const relations = defineRelations(schema, r => ({
  users: {
    // A user can have one worker profile
    workerProfile: r.one.workerProfiles({
      from: r.users.id,
      to: r.workerProfiles.userId,
    }),
    // A user can be the client on many jobs
    postedJobs: r.many.jobs({
      from: r.users.id,
      to: r.jobs.clientId,
    }),
    // A user can be the worker assigned to many jobs
    assignedJobs: r.many.jobs({
      from: r.users.id,
      to: r.jobs.workerId,
    }),
  },

  workerProfiles: {
    // A worker profile belongs back to exactly one user account
    user: r.one.users({
      from: r.workerProfiles.userId,
      to: r.users.id,
    }),
  },

  jobs: {
    // A job points back to its client
    client: r.one.users({
      from: r.jobs.clientId,
      to: r.users.id,
    }),
    // A job points back to its assigned worker (nullable)
    worker: r.one.users({
      from: r.jobs.workerId,
      to: r.users.id,
    }),
  },
}))