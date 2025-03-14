import { directive } from '@oiij/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp
  app.use(directive)
})
