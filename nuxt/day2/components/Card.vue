<script setup>
const props = defineProps({
    imgSrc : {
        type : String,
        default : "../assets/images/elementor-placeholder-image.webp"
    } ,
    name : {
        type : String,
    },
    link : {
        type : String,
    }
})

</script>


<template>
    <div class=" w-[280px] bg-white rounded-lg mt-4 ms-4 border border-blue-100 flex flex-col justify-between gap-4 shadow-md transition duration-500 hover:transform hover:translate-y-[-15px]">
        <div class="image bg-slate-300  h-[150px]">
            <img class=" h-full w-full object-cover object-center rounded-lg"
            :src="imgSrc">
        </div>
        <h2 class=" text-2xl text-slate-900 mb-5 px-3">{{ name }}</h2>
        <nuxt-link class=" text-blue-500 text-right cursor-pointer mb-4 pe-3 w-fit underline self-end"
        :to="link">More info</nuxt-link>
    </div>
</template>



