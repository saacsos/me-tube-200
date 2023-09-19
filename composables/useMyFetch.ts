export default async function<T> (path: string, options : {}) {
  const config = useRuntimeConfig()
  return await useLazyFetch<T>(path, {
    ...options,
    baseURL: config.public.apiBaseURL,
    headers: {
      "Accept": "application/json"
    }
  })
}