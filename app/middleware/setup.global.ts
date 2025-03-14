export default defineNuxtRouteMiddleware((to, from) => {
  const toDepth = to.path.split('/').length
  const fromDepth = from.path.split('/').length
  to.meta.pageTransition = {
    name: toDepth < fromDepth ? 'slide-right' : toDepth > fromDepth ? 'slide-left' : 'fade',
  }
})
