import { sqliteTable, text, integer, numeric } from 'drizzle-orm/sqlite-core';

export const products = sqliteTable('products', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    sku: text('sku').notNull(),
    price: numeric('price', { mode: 'number'}).notNull(),
    stock: integer('stock').notNull(),
});
