<template>
    <div class="h-full overflow-hidden">
      <USkeleton v-for="skeleton in 3" :key="skeleton" class="h-56 w-full mb-3" />
    </div>
  </template>