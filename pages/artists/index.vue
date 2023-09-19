<template>
  <h1>Artists</h1>

  <div v-if="pending">
    Loading...
  </div>
  <div v-else>
    <div class="mx-8 my-2 border p-4 rounded-xl hover:bg-green-200"
         v-for="artist in artists" :key="artist.id">
      <NuxtLink class="hover:text-blue-500 hover:font-bold"
        :to="`/artists/${artist.id}`">
        {{ artist.name }}
      </NuxtLink>
    </div>
  </div>

</template>

<script setup lang="ts">
const { data: artists, pending } = await useMyFetch<any>("artist", {})
</script>