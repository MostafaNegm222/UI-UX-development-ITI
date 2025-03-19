<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    increase() {
      if (this.counter < 10) {
        this.counter++;
      }
      if (this.counter >= 5) {
      }
      
    },
    decrease() {
      if (this.counter > 0) {
        this.counter--;
      }
      if (this.counter < 5) {
      }
    },
  },
};
</script>

<template>
  <main :class="counter > 5 ? 'dark' : 'light'">
    <h1>Hello ITI</h1>
    <p>{{ counter }}</p>
    <div class="buttons">
      <button @click="increase">add</button>
      <button @click="decrease">subtract</button>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 40px;
}
button {
  border: none;
  border-radius: 8px;
  margin-right: 16px;
  padding: 12px 24px;
  background-color: aqua;
  color: black;
  font-size: 18px;
  font-weight: 500;
}

p {
  font-size: 24px;
  font-weight: bold;
}

.light {
  background-color: white;
  color: rgb(0, 0, 86);
}

.dark {
  color: white;
  background-color: rgb(0, 0, 86);
}
</style>
