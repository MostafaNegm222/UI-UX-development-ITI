
<script>
export default {
  props: {
    id: String,
  },
};
</script>

<template>
    <h1>user</h1>
    <p>{{ $route.params.id }}</p>
</template>