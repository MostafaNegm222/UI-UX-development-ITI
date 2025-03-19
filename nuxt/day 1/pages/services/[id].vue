<script setup>
import { useRoute , useRouter } from 'vue-router';

definePageMeta({
  layout: "default",
});

const services =  [
  { id: 1, name: "Web Development", description: "Building responsive and user-friendly websites.", price: "$500" },
  { id: 2, name: "SEO Optimization", description: "Improving website visibility on search engines.", price: "$300" },
  { id: 3, name: "Mobile App Development", description: "Creating mobile applications for Android and iOS.", price: "$1000" },
  { id: 4, name: "UI/UX Design", description: "Designing intuitive and aesthetic user interfaces.", price: "$400" },
  { id: 5, name: "Content Writing", description: "Writing high-quality content for websites and blogs.", price: "$200" }
];

const route = useRoute();
const router = useRouter()
const filtered = services.find((item) => item.id == route.params.id);
</script>

<template>
  <div v-if="filtered" class="text-center p-3 border-blue-200 border w-[50%] transform translate-y-[-50%] translate-x-[-50%] absolute top-[50%] left-[50%]">
    <h2 class="text-2xl font-bold mb-3">{{ filtered.name }}</h2>
    <p class="text-lg mb-3">{{ filtered.description }}</p>
    <p class="text-sm text-gray-100 mb-3">Price: {{ filtered.price }}</p>
    <button @click="router.push('/services')"
    class="py-2 px-4 mt-3 bg-blue-700 text-teal-50 rounded-2xl"
    >Back to services</button>
  </div>
  <div v-else>
    <p class="text-red-500">Service not found!</p>
  </div>
</template>
