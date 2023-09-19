<template>
  <NuxtLink class="inline-block px-4 py-2 bg-blue-300 hover:bg-blue-400"
    :to="to">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps([
  'to'
])
</script>