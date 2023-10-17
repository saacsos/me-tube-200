<template>
  <div
      class="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
      <div class="w-full">
          <div class="text-center">
              <h1 class="text-3xl font-semibold text-gray-900">Sign in</h1>
              <p class="mt-2 text-gray-500">Sign in below to access your account</p>
          </div>
          <div class="mt-5">
              <form @submit.prevent="onSubmit()">
                  <div class="text-red-600">
                    {{ errorMessage }}
                  </div>
                  <div class="relative mt-6">
                      <input type="email" v-model="formData.email" id="email" placeholder="Email Address" class="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autocomplete="NA" />
                      <label for="email" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                  </div>
                  <div class="relative mt-6">
                      <input type="password" v-model="formData.password" id="password" placeholder="Password" class="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                      <label for="password" class="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                  </div>
                  <div class="my-6">
                      <button type="submit" class="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Sign in</button>
                  </div>
                  <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                      <a href="#!"
                          class="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                          up
                      </a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore"

const auth = useAuthStore()
const errorMessage = ref<string|undefined>("")
const formData = reactive({ email: "", password: "" })

async function onSubmit() {
  const { data: response, error } = await useMyFetch<any>('auth/login', {
    method: 'POST',
    body: formData
  })
  if (response.value !== null) {
    const { access_token, token_type } = response.value
    if (access_token !== "") {
      auth.setNewToken(access_token)
      const { data: user, error } = await useMyFetch<any>('auth/me', {
        method: 'POST'
      })
      if (user.value !== null) {
        auth.setUser(user.value.name, user.value.email)
        await navigateTo('/playlist')
      } else {
        auth.clear()
        errorMessage.value = "Please try again"
      }
      
    }
  } else {
    errorMessage.value = error.value?.data.message
  }
}
</script>