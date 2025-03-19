<script>
import UserProfile from './components/UserProfile.vue';

export default {
  data() {
    return {
      userId: 1,
    };
  },
};
</script>

<template>
  <h1>Navigator</h1>
  <router-link to="/">Home</router-link>
  <router-link to="/About">About</router-link>
  <router-link :to="`/user/${userId}`">UserProfile</router-link>
  <router-view></router-view>
</template>
