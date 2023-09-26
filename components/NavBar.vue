<template>
  <nav class="flex justify-between">
    <div>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/artists">Artist</MenuLink>
      <MenuLink to="/artists/create">Add Artist</MenuLink>
      <MenuLink v-if="auth.isLogin" to="/playlist">My Playlist</MenuLink>
    </div>
    <div v-if="!auth.isLogin">
      <MenuLink to="/login">Login</MenuLink>
    </div>
    <div class="flex" v-else>
      <div class="px-4 py-2">Welcome, {{ auth.user.name }}</div>
      <button class="inline-block px-4 py-2 bg-blue-300 hover:bg-blue-400" 
              @click="onLogout">
          Logout
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";

const auth = useAuthStore()

async function onLogout() {
  const { data: response, error } = await useMyFetch<any>('auth/logout', {
    method: 'POST'
  })
  if (response.value !== null) {
    auth.clear()
    await navigateTo('/login')
  }
}
</script>