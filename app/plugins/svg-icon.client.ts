import { SvgIcon } from '#components'
import 'virtual:svg-icons-register'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('svg-icon', SvgIcon)
})
