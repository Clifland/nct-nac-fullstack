CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`sku` text NOT NULL,
	`price` numeric NOT NULL,
	`stock` integer NOT NULL
);
