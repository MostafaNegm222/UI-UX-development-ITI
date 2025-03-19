export default defineNuxtRouteMiddleware((to, from) => {
    if(import.meta.client) {
    console.log(`Navigating from ${from.fullPath} to ${to.fullPath}`);
    }
  });