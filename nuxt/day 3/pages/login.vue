<script setup>
import { z } from "zod";
definePageMeta({
  layout: false,
});

const formState = reactive({
  username: undefined,
  password: undefined,
});

const schema = z.object({
  username: z.string().trim().min(1, "Username is required"),
  password: z.string().trim().min(1, "Password is required"),
});

async function login({ data }) {
  try {
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
</script>

<template>
  <div class="h-screen flex items-center justify-center p-6">
    <div
      class="bg-white shadow-md rounded w-[800px] overflow-hidden flex items-center h-[450px]"
    >
      <div class="w-1/2 h-full bg-slate-100"></div>

      <div class="p-6">
        <h1 class="text-4xl mb-1 text-green-800 font-black uppercase">Login</h1>
        <p class="text-slate-500 mb-8">Welcome back to good recipes</p>

        <UForm :state="formState" :schema="schema" @submit="login">
          <div class="h-[100px]">
            <UFormGroup label="Username" name="username">
              <UInput v-model="formState.username"></UInput>
            </UFormGroup>
          </div>
          <div class="h-[100px]">
            <UFormGroup label="Password" name="password">
              <UInput type="password" v-model="formState.password"></UInput>
            </UFormGroup>
          </div>

          <UButton
            type="submit"
            color="orange"
            class="duration-300 hover:bg-orange-600 mb-6"
            block
          >
            Login
          </UButton>
        </UForm>
      </div>
    </div>
  </div>
</template>
