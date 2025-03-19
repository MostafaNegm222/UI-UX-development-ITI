<script setup>
const props = defineProps(["links"]);

const emit = defineEmits(["updateFilter"]);
const activeLink = ref("All");

function updateFilter(link) {
  activeLink.value = link;
  emit("updateFilter", link);
}
</script>

<template>
  <div class="p-4 w-[100%] bg-blue-600 flex justify-between shadow-md fixed z-20">
    <nuxt-link to="/" class="text-xl text-white">Zatona Restaurant</nuxt-link>
    <div class="flex gap-6">
      <p v-if="$route.path == '/'"
        class="text-white cursor-pointer transition duration-300 hover:text-blue-300"
        :class="{ 'font-bold': activeLink === 'All' }"
        @click="updateFilter('All')"
      >
        All
      </p>
      <p
        v-for="link in links"
        :key="link"
        class="text-white cursor-pointer transition duration-300 hover:text-blue-300"
        :class="{ 'font-bold': activeLink === link }"
        @click="updateFilter(link)"
      >
        {{ link }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.font-bold {
  font-weight: bold;
}
</style>