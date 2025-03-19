<template>
    <div class="recipe-card border rounded-lg shadow-md p-4 my-4">
      <img :src="recipe.image" alt="Recipe Image" class=" h-32 object-cover rounded-md mb-2" />
      <h3 class="font-bold text-lg">{{ recipe.title }}</h3>
      <p class="text-white">{{ recipe.description }}</p>
      <NuxtLink :to="`/${recipe.id}`" class="text-blue-500 hover:underline mt-2 block">
        View Details
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  defineProps({
    recipe: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .recipe-card {
    transition: transform 0.2s;
  }
  .recipe-card:hover {
    transform: scale(1.05);
  }
  </style>



