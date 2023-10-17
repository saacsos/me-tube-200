<template>
  <div class="m-8">
    <form @submit.prevent="sendMessage">
      <div class="flex flex-col w-full sm:w-1/2">

        <span v-if="$io">{{ $io.id }}</span>
        <input class="border border-gray-400 px-2 py-1 my-2" type="text" v-model="form.message">
        <button class="btn btn-primary border w-36 px-4 py-2 my-2 rounded-lg bg-green-400">
          Send Message
        </button>

      </div>
    </form>
    <section class="flex items-start flex-col">
      <div v-for="message in messages" :key="message">
        <div class="bg-blue-500 text-white rounded-lg p-2 shadow mr-2 max-w-sm mb-1">
          {{ message }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">

const { $io } = useNuxtApp();
const messages: string[] = reactive([])
const form = reactive({
  message: ''
})

onMounted(() => {
  $io.on('message', (message) => {
    messages.push(message)
  })
})

const sendMessage = () => {
  console.log($io.id, `submit message: ${form.message}`);
  if (form.message.trim()) {
    $io.emit("message", form.message.trim());
    form.message = ""
  }
};

</script>