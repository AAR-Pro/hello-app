<template>
  <div id="app">
    <h1>Frontend</h1>
    <button @click="getMessage">Get Message</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return { message: "" };
  },
  methods: {
    async getMessage() {
      const res = await fetch("http://localhost:4000/hello");
      const data = await res.json();
      this.message = data.message;
    }
  }
};
</script>
