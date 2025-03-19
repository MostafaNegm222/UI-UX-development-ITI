<script setup>
definePageMeta({
  layout: "default",
});
const services =  [
        { id: 1, name: "Web Development",},
        { id: 2, name: "SEO Optimization",},
        { id: 3, name: "Mobile App Development",},
        { id: 4, name: "UI/UX Design",},
        { id: 5, name: "Content Writing",}
      ]
</script>

<template>
    <div class="text-center">
      <h2 class="text-2xl font-bold mb-3">Welcome to the Services Page</h2>
      <div v-for="service in services" :key="service.id" class="py-4">
        <NuxtLink :to="`/services/${service.id}`" class="px-4 py-4 hover:bg-blue-500 rounded hover:text-white transition duration-300">
        {{ service.name }} </NuxtLink>
  </div>
    </div>
  </template>