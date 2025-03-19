<template>
    <div class="p-6 flex  gap-4 shadow-lg">
<div class="container m-auto flex justify-between items-center ">
    <NuxtLink to="/" class="uppercase font-black text-2xl text-green-700 flex gap-1 items-center">

        <UIcon name="i-mdi-cook" />
        <span>good</span>
        <span class="text-orange-500">recipes</span>
    </NuxtLink>
    <NuxtLink to="/login">
        <UButton class="bg-green-600 duration-300 hover:bg-green-700">Login</UButton>
    </NuxtLink>

</div>
    </div>
</template>