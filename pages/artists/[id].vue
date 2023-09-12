<template>
  <h1>{{ pageTitle }}</h1>
</template>

<script setup type="ts">
const route = useRoute()
const pageTitle = `Artist ID: ${route.params.id}`
</script>