# nct-nac-fullstack

A full-stack starter template to demonstrate `nuxt-crud-table` (nct) with `nuxt-auto-crud` - a dynamic crud engine. 
Build completely operational, schema-driven administrative interfaces and backend API layers simultaneously.

---

## Installation

### 1. Initialize the Project

```bash
nuxi init -t gh:Clifland/nct-nac-fullstack <your-app-name>

```

### 2. Run the development server

```bash
cd <your-app-name>
nuxt dev

```

---

## Quick Start & UI Overview

An example based on products schema can be managed at:

📍 **URL:** `http://localhost:3000/resource/products`

This dynamic dashboard workspace demonstrates the instant synchronization between front-end UI representations and automatic backend schemas:

* **Creating Records:** Look at the **top right** corner of the workspace screen to find the **"Add New Product"** button. Clicking this instantly spins up an auto-validated form matching your schema layout context.
* **Row Operations (View, Edit, Delete):** To keep your data grid clear and tightly focused, standard administrative row actions are neatly encapsulated. On the **right side of each row**, hover over or select the **hamburger icon menu** to toggle visibility for individual **View**, **Edit**, or **Delete** interaction tools.

---

## Adding Your Own Resource

1. Define your new resource's database structure in `server/db/schema.ts` file.
2. Generate & apply migrations And restart app with command:

```bash
nuxt db generate
nuxt dev
```

> [!Note]
> The `nuxt-crud-table` view mounted under the dynamic `[resource]` route will automatically adjust to display updated columns, form structures, data fields, and operational workflows.