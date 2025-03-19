<template>
  <div class="h-screen flex justify-center items-center">
    <div
      v-if="isOpen"
      @click.self="isOpen = false"
      class="overlay absolute w-screen h-screen bg-slate-900/50 flex justify-center items-center"
    >
      <div class="bg-white border w-[45%]">
        <h3 class="text-2xl text-white bg-blue-400 mb-4 px-3 py-2 text-center flex justify-between items-center">
            Update form <sup @click="isOpen=false" class=" cursor-pointer">x</sup>
          </h3>
        <form @submit.prevent="updateProfile">
          <div class="px-4 mb-3">
            Name:
            <input
              type="text"
              v-model="formName"
              class="border rounded-lg px-2 py-1 w-[80%]"
            />
          </div>
          <div class="px-4 mb-3">
            Age:
            <input
              type="number"
              v-model="formAge"
              class="border rounded-lg ms-3 px-2 py-1 w-[80%]"
            />
          </div>
          <button
            type="submit"
            class="w-[80%] block mx-auto py-1 bg-blue-700 text-white text-lg my-5 rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>

    <div class="w-[50%] mx-auto border mb-4">
      <div
        class="header p-3 bg-blue-900 text-white flex justify-between items-center"
      >
        <h2 class="text-xl">Profile</h2>
        <button @click="isOpen = true" class="px-3 py-2 bg-blue-500 rounded-xl">
          Update
        </button>
      </div>
      <div class="info p-3 flex flex-col gap-3">
        <p>Name : {{ name }}</p>
        <p>Age : {{ age }}</p>
        <p>Age Group : {{ ageGroup }}</p>
      </div>
      <div class="footer p-3 bg-gray-300">
        <p>({{ updated }}) updated - Last Updated: {{ updateTime }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isOpen = ref(false);
const formName = ref("");
const formAge = ref("");
const name = ref("Negm");
const age = ref(25);
const updated = ref(0);
const updateTime = ref("Never");

const ageGroup = computed(() => {
  if (age.value > 60) return `Senior`;
  else if (age.value < 60 && age.value > 18) return `Adult`;
  else if (age.value < 18) return `Young`;
  else return "unknown";
});

const updateProfile = () => {
  name.value = formName.value;
  age.value = formAge.value;
  updated.value++;
  updateTime.value = new Date().toLocaleString();
  isOpen.value = false;
  formName.value = null;
  formAge.value = null;
};
</script>
