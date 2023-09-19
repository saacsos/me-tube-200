<template>
  <div class="m-8 p-4 bg-green-400">
    <div class="text-3xl">{{ name }}</div>
    <div class="text-6xl">{{ counter.number }}</div>
    <div class="flex">
      <button @click="up()" class="mx-4 px-2 bg-white rounded-lg">
        Up
      </button>
      <button @click="down()" class="mx-4 px-2 bg-white rounded-lg">
        Down
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['name'])
const counter = reactive({ number: 0 })

function down() {
  counter.number--
}

function up() {
  counter.number += 1
}
</script>