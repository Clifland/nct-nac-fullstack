CREATE TABLE `permissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`code` text NOT NULL,
	`status` text DEFAULT 'active',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer,
	`created_by` integer,
	`updated_by` integer
);
--> statement-breakpoint
CREATE TABLE `resources` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL UNIQUE,
	`status` text DEFAULT 'active',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer,
	`created_by` integer,
	`updated_by` integer
);
--> statement-breakpoint
CREATE TABLE `role_resource_permissions` (
	`role_id` integer NOT NULL,
	`resource_id` integer NOT NULL,
	`permission_id` integer NOT NULL,
	`status` text DEFAULT 'active',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer,
	`created_by` integer,
	`updated_by` integer,
	CONSTRAINT `fk_role_resource_permissions_role_id_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_role_resource_permissions_resource_id_resources_id_fk` FOREIGN KEY (`resource_id`) REFERENCES `resources`(`id`) ON DELETE CASCADE,
	CONSTRAINT `fk_role_resource_permissions_permission_id_permissions_id_fk` FOREIGN KEY (`permission_id`) REFERENCES `permissions`(`id`) ON DELETE CASCADE
);
--> statement-breakpoint
CREATE TABLE `roles` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL UNIQUE,
	`status` text DEFAULT 'active',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer,
	`created_by` integer,
	`updated_by` integer
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`role_id` integer DEFAULT 1,
	`name` text NOT NULL,
	`email` text NOT NULL UNIQUE,
	`password` text,
	`status` text DEFAULT 'active',
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL,
	`deleted_at` integer,
	`created_by` integer,
	`updated_by` integer,
	CONSTRAINT `fk_users_role_id_roles_id_fk` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `unq_role_res_perm` ON `role_resource_permissions` (`role_id`,`resource_id`,`permission_id`);