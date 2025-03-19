export default defineNuxtRouteMiddleware(async (to, from) => {
  if (import.meta.client) {
    if (to.params.id) {
      try {
        const config = useRuntimeConfig();
        const data = await $fetch(`/recipes/${to.params.id}`, {
          method: "GET",
          baseURL: config.public.baseURL,
        });        
        if (data && data.cuisine?.toLowerCase() === "italian") {
          console.log(`Italian recipe accessed: ${data.name}`);
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    }
  }
});
