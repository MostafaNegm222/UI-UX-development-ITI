<script setup>
definePageMeta({
    middleware : `italian`,
})
const route = useRoute()
const { data, status, error } = useAsyncApi("GET", `/recipes/${route.params.id}`);    
</script>

<template>
    <div class="pb-6 pt-[100px]">
        <div v-if="status === 'pending'" class="text-center text-lg font-bold text-blue-600 rounded-lg">
        Loading recipes...
        </div>

        <div v-else-if="error" class="text-center text-lg font-bold text-red-600">
        {{ error?.message || "Failed to fetch recipes. Please try again." }}
        </div>

        <div v-else-if="!data || data.length === 0" 
            class="text-center text-lg font-bold text-gray-600">
        No recipes found.
        </div>
        <div v-else class="w-[100%] flex flex-col items-center">
            <h2 class=" text-2xl text-center mb-7 font-bold">Recipe Details</h2>
            <card-details
          :name="data.name" 
          :imgSrc="data.image"
          :rating="data.rating"
        >
        <div class="ms-8">
            <h4 class="text-xl text-slate-900 mb-4 ps-3">Ingredients</h4>
            <ul class=" list-disc ms-8">
                <li v-for="(ingredient,index) in data.ingredients" :key="index">
                    {{ ingredient }}
                </li>
            </ul>
            <h4 class="text-xl text-slate-900 mb-4 mt-7 ps-3">Instructions</h4>
            <ul class=" list-disc ms-8 w-[80%]">
                <li v-for="(instruction,index) in data.instructions" :key="index">
                    {{ instruction}}
                </li>
            </ul>
        </div>
        </card-details>
        </div>
    </div>
</template>