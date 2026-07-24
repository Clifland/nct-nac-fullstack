<script setup lang="ts">
const routes = [
  { to: '/resource/users', label: 'Users' },
  { to: '/resource/roles', label: 'Roles' },
  { to: '/resource/resources', label: 'Resources' },
  { to: '/resource/permissions', label: 'Permissions' },
  { to: '/resource/role_resource_permissions', label: 'Role Resource Permissions' },
]
</script>   

<template>
  <div>
    <h1>Nuxt Crud Table</h1>
    <ul class="gap-4">
      <li v-for="route in routes">
        <ULink :to="route.to">{{ route.label }}</ULink>
      </li>
    </ul>
  </div>
</template>
