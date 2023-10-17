<template>
  <h1>About</h1>
  <button @click="onClick">
    Click
  </button>
  <p ref="paragraph">1234</p>
</template>

<script setup lang="ts">
const paragraph = ref(null)
function onClick() {
  console.log(paragraph.value)
}
</script>