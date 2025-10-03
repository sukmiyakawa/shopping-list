<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Manual from "./components/Manual.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="operation">
    <Header />
    <Main />
  </div>
  <Manual />
  <Footer />
</template>

<style scoped>
div {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.operation {
  margin-top: 100px;
}
</style>
