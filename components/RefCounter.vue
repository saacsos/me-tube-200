<template>
  <div>
  <div class="text-center text-3xl">
    {{ name }}
  </div>
  <div class="flex items-center justify-center">
      <button @click="down()" id="decrement-btn"
          class="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-gray-400 hover:bg-gray-500">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
          </svg>
      </button>
      <span id="counter" class="text-4xl font-bold mx-4">{{ counter }}</span>
      <button @click="up()" id="increment-btn"
          class="flex justify-center items-center w-10 h-10 rounded-full text-white focus:outline-none bg-indigo-500 hover:bg-indigo-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v12M6 12h12"></path>
          </svg>
      </button>
  </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['name'])
const counter = ref(0)
const objectCounter = ref({ count : 0 })

function up() {
  counter.value++
  objectCounter.value.count++
  console.log(props.name, counter)
  console.log(props.name, objectCounter)
}

function down() {
  counter.value--
  objectCounter.value.count--
  console.log(props.name, counter)
  console.log(props.name, objectCounter)
}
</script>