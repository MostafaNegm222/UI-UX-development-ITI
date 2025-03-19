<template>
  <router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component" :key="$route.path"></component>
    </transition>
  </router-view>
</template>

<style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: all 2s;
  }

  .slide-enter-from {
    opacity: 0;
    transform: translateY(-40%);
  }
</style>
