<script setup>

const { data: tags, status: tagsStatus } = useAsyncApi('GET',"/recipes/tags");
const selectedTag = ref("all");

const route = useRoute();

if (route.query?.tag) {
  selectedTag.value = route.query.tag;
}

const fetchRecipesString = computed(() => {
  if (selectedTag.value !== "all") {
    return `/recipes/tag/${selectedTag.value}`;
  }
  return `/recipes`;
});

const { data, status, refresh } =  useAsyncApi('GET',fetchRecipesString);

watch(selectedTag, () => {
  refresh();
});
</script>

<template>
  <div class="p-6">
    <div class="container m-auto">
      <AppCover />
      <div class="py-6 flex flex-col md:flex-row gap-6">
        <div
          class="w-full md:w-1/5 shrink-0 flex flex-wrap flex-row md:flex-col gap-2"
        >
          <NuxtLink
            :to="{ path: '/', query: { tag: 'all' } }"
            class="cursor-pointer p-2 rounded duration -300 hover:text-green-600 hover:bg-green-100"
            :class="selectedTag == 'all' ? 'bg-slate-100 text-green-600' : ''"
          >
            All
          </NuxtLink>
          <NuxtLink
            v-for="tag in tags"
            :key="tag"
            :to="{ path: '/', query: { tag: tag } }"
            class="cursor-pointer p-2 rounded duration-300 hover:text-green-600 hover:bg-green-100"
            :class="selectedTag == tag ? 'bg-slate-100 text-green-600' : ''"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </NuxtLink>
        </div>

        <div class="grow">
          <ListWrap
            :status="status"
            :isData="data?.recipes.length > 0 ? true : false"
          >
            <template v-for="recipe in data.recipes" :key="recipe.id">
              <Card :recipe="recipe" />
            </template>
          </ListWrap>
        </div>
      </div>
    </div>
  </div>
</template>
