import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  role: text('role', { enum: ['client', 'worker', 'admin'] }).notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const workerProfiles = sqliteTable('worker_profiles', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  skills: text('skills').notNull(), // Comma-separated or JSON array of trades (e.g., 'plumber,electrician')
  isAvailable: integer('is_available', { mode: 'boolean' }).notNull().default(true),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});

export const jobs = sqliteTable('jobs', {
  id: text('id').primaryKey(),
  clientId: text('client_id').notNull().references(() => users.id),
  workerId: text('worker_id').references(() => users.id),
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: text('status', { enum: ['pending', 'assigned', 'completed', 'cancelled'] }).notNull().default('pending'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull(),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).notNull(),
});