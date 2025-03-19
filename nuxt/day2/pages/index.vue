<script setup>
import { ref, computed } from 'vue';
const { data, status, error } = useAsyncApi("GET", "/recipes");


const selectedFilter = ref("All");
const mealName = ref("");
const uniqueMealTypes = computed(() => {
  return data.value?.recipes ? Array.from(new Set(data.value.recipes.map(item => item.mealType[0]))) : [];
});
const filtered = computed(() => {
  let result = data.value?.recipes || [];
  if (selectedFilter.value !== "All") {
    result = result.filter(ele => ele.mealType[0] === selectedFilter.value);
  }
  if (mealName.value.trim()) {
    result = result.filter(ele => ele.name.toLowerCase().includes(mealName.value.toLowerCase()));
  }
  return result;
});

function updateFilter(filter) {
  selectedFilter.value = filter;
}

const sortBy = ref('title')
const sortedFilteredRecipes = computed(() => {
  const recipes = [...filtered.value]
  switch (sortBy.value) {
    case 'title':
      return recipes.sort((a, b) => a.name.localeCompare(b.name))
    case 'rating':
      return recipes.sort((a, b) => (b.rating || 0) - (a.rating || 0))
    case 'cookingTime':
      return recipes.sort((a, b) => (a.cookingTime || 0) - (b.cookingTime || 0))
    default:
      return recipes
  }
})

const currentPage = ref(1)
const itemsPerPage = 8

const pageCount = computed(() => Math.ceil(sortedFilteredRecipes.value.length / itemsPerPage))
const paginatedRecipes = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return sortedFilteredRecipes.value.slice(start, end)
})

watch(selectedFilter, () => {
  currentPage.value = 1
})

function nextPage() {
  if (currentPage.value < pageCount.value) {
    currentPage.value++
  }
}

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}


</script>

<template>
  <NavBar :links="uniqueMealTypes" @updateFilter="updateFilter" />
  <div class="pb-6 pt-[100px] flex flex-col items-center">
    <h1 class="text-3xl font-bold mb-6 text-center">{{selectedFilter}} Recipes</h1>
    <div class="w-[83%] mx-auto mb-8 mt-4 flex justify-between items-center gap-8" v-if="status === 'success'">
      <div class=" flex items-center w-2/3">
        <label for="mealName" class="text-xl font-bold mx-4">Search Meal:</label>
        <input type="text" v-model="mealName" 
             id="mealName"
             class="border border-blue-400 rounded-lg px-4 py-2 grow"
             placeholder="Search for Meal">
      </div>
      <div class="sorting flex justify-end items-center w-1/3">
        <label for="sortSelect" class="text-xl me-5 font-bold">Sort by:</label>
        <select class=" px-4 py-2 rounded-lg border border-blue-300 grow"
         id="sortSelect" v-model="sortBy" @change="handleSortChange">
          <option value="title">Title</option>
          <option value="rating">Rating</option>
          <option value="cookingTime">Cooking Time</option>
        </select>
      </div>
    </div>


    <div v-if="status === 'pending'" class="text-center text-lg font-bold text-blue-600 rounded-lg">
      Loading recipes...
    </div>

    <div v-else-if="error" class="text-center text-lg font-bold text-red-600">
      {{ error?.message || "Failed to fetch recipes. Please try again." }}
    </div>

    <div v-else-if="!paginatedRecipes || paginatedRecipes.length === 0" 
         class="text-center text-lg font-bold text-gray-600">
      No recipes found.
    </div>
    <div v-else class="flex flex-col items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        <Card 
          v-for="item in paginatedRecipes"
          :key="item.id"
          :name="item.name"
          :imgSrc="item.image"
          :link="`/${item.id}`"
        /> 
      </div>
      <div v-if="pageCount > 1" class="pagination text-center my-6 flex gap-5 justify-center">
        <button @click="prevPage" :disabled="currentPage === 1"
        class="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer disabled:bg-slate-300 disabled:text-black disabled:cursor-not-allowed"
        >Previous</button>
        <span>Page {{ currentPage }} of {{ pageCount }}</span>
        <button @click="nextPage" :disabled="currentPage === pageCount"
        class="px-3 py-1 bg-blue-500 text-white rounded-lg cursor-pointer disabled:bg-slate-300 disabled:text-black disabled:cursor-not-allowed"
        >Next</button>
      </div>
    </div>
    </div>

</template>