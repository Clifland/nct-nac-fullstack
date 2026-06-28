<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string
</script>

<template>
    <div>
        <h1>Resource: {{ slug }}</h1>
        <NctCrudTable :resource="slug" />
    </div>
</template>
