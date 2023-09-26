<template>
  <div class="mt-8 mx-4 mb-2">
    <h1 class="text-3xl">My Playlist</h1>
  </div>
  <div class="mx-4 text-xl">
    <div v-for="playlist in playlists" :key="playlist.id">
      {{ playlist.name }} [{{ playlist.accessibility }}]
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore"

const auth = useAuthStore()
const { data: playlists, error } = await useMyFetch<any>('playlist', {})

</script>