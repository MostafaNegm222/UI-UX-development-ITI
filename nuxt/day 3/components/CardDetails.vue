<script setup>
const props = defineProps({
    imgSrc : {
        type : String,
        default : "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
    } ,
    name : {
        type : String,
    },
    rating : {
        type : Number
    }
})
</script>

<template>
    <div class=" bg-white rounded-lg mt-4 ms-4 border border-blue-100 w-fit flex flex-col justify-between gap-4">
        <div class="image h-[300px]">
            <img class=" w-[100%] h-full object-cover object-center rounded-lg"
            :src="imgSrc">
        </div>
        <div class="flex gap-4 justify-between items-baseline px-4">
            <h2 class=" text-3xl text-slate-900 mb-5 ps-3 font-bold">{{ name }}</h2>
            <h4 class=" text-xl">Rating : {{ rating }} ✨ </h4>
        </div>
        <slot></slot>
        <nuxt-link class=" block text-blue-500 text-right cursor-pointer mb-4 pe-3"
        to="/">Back To Home</nuxt-link>
        </div>
</template>